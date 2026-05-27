#!/usr/bin/env python3
"""
Upload a local file to the VPS using SSH exec `cat > file` instead
of SFTP. DreamHost's SFTP subsystem returns ENOENT on CMD_OPEN for
reasons we don't control; the SSH exec channel works reliably.

Usage:
    SBE_SSH_PASS='...' py ssh-upload-exec.py <local-path> <remote-path>
"""
import os
import sys
import paramiko

HOST = "vps63781.dreamhostps.com"
PORT = 22
USER = "dh_isibk9"
CHUNK = 65536


def main() -> int:
    if len(sys.argv) != 3:
        sys.stderr.write("Usage: ssh-upload-exec.py <local-path> <remote-path>\n")
        return 2

    local_path, remote_path = sys.argv[1], sys.argv[2]
    if not os.path.isfile(local_path):
        sys.stderr.write(f"ERROR: local file not found: {local_path}\n")
        return 4

    password = os.environ.get("SBE_SSH_PASS")
    if not password:
        sys.stderr.write("ERROR: SBE_SSH_PASS not set.\n")
        return 2

    local_size = os.path.getsize(local_path)

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        ssh.connect(
            HOST,
            port=PORT,
            username=USER,
            password=password,
            allow_agent=False,
            look_for_keys=False,
            timeout=25,
            auth_timeout=25,
            banner_timeout=25,
        )
    except paramiko.AuthenticationException:
        sys.stderr.write("ERROR: SSH authentication failed.\n")
        return 3
    except Exception as exc:
        sys.stderr.write(f"ERROR: SSH connection failed: {exc!r}\n")
        return 4
    finally:
        password = None
        try:
            del os.environ["SBE_SSH_PASS"]
        except KeyError:
            pass

    # Escape remote_path for single-quoted shell context.
    shell_quoted = "'" + remote_path.replace("'", "'\\''") + "'"
    cmd = f"cat > {shell_quoted}"

    sys.stdout.write(
        f"Uploading {local_path} -> {USER}@{HOST}:{remote_path} "
        f"({local_size:,} bytes) via SSH exec cat\n"
    )

    stdin, stdout, stderr = ssh.exec_command(cmd, timeout=600, get_pty=False)
    sent = 0
    last_reported = 0
    with open(local_path, "rb") as fh:
        while True:
            chunk = fh.read(CHUNK)
            if not chunk:
                break
            stdin.write(chunk)
            sent += len(chunk)
            pct = (sent * 100) // local_size if local_size else 100
            if pct - last_reported >= 20 or sent == local_size:
                last_reported = pct
                sys.stdout.write(f"  {sent:,}/{local_size:,} ({pct}%)\n")
                sys.stdout.flush()

    try:
        stdin.channel.shutdown_write()
    except Exception:
        pass

    exit_status = stdout.channel.recv_exit_status()
    err = stderr.read().decode("utf-8", errors="replace")
    if err:
        sys.stderr.write("\n[remote stderr]\n" + err)

    # Verify size remotely
    stdin2, stdout2, stderr2 = ssh.exec_command(
        f"wc -c {shell_quoted} 2>&1", timeout=30
    )
    verify_out = stdout2.read().decode("utf-8", errors="replace").strip()
    sys.stdout.write(f"Remote size check: {verify_out}\n")

    ssh.close()
    if exit_status != 0:
        sys.stderr.write(f"ERROR: remote cat exited {exit_status}\n")
        return exit_status
    sys.stdout.write("Upload complete.\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
