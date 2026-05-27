#!/usr/bin/env python3
"""
Run a local bash script against the SBE Studio DreamHost VPS via
paramiko. Password lives only in the SBE_SSH_PASS env var and is
deleted from memory as soon as the handshake succeeds.

Usage:
    SBE_SSH_PASS='...' py ssh-run.py <local-script-path>
"""
import os
import sys
import paramiko

# Force utf-8 output + replace unencodable chars so systemctl's unicode
# box-drawing characters don't crash the runner on Windows cp1252.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

HOST = "vps63781.dreamhostps.com"
PORT = 22
USER = "dh_isibk9"


def main() -> int:
    if len(sys.argv) != 2:
        sys.stderr.write("Usage: ssh-run.py <local-script-path>\n")
        return 2

    script_path = sys.argv[1]
    if not os.path.isfile(script_path):
        sys.stderr.write(f"ERROR: script not found: {script_path}\n")
        return 4

    password = os.environ.get("SBE_SSH_PASS")
    if not password:
        sys.stderr.write("ERROR: SBE_SSH_PASS not set.\n")
        return 2

    with open(script_path, "rb") as fh:
        script_bytes = fh.read()

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

    # Execute remote bash -s, pipe our script via stdin.
    stdin, stdout, stderr = ssh.exec_command(
        "bash -s", timeout=600, get_pty=False
    )
    stdin.write(script_bytes)
    try:
        stdin.channel.shutdown_write()
    except Exception:
        pass

    while True:
        line = stdout.readline()
        if not line:
            break
        sys.stdout.write(line)
        sys.stdout.flush()

    err = stderr.read().decode("utf-8", errors="replace")
    exit_status = stdout.channel.recv_exit_status()
    if err:
        sys.stderr.write("\n[remote stderr]\n")
        sys.stderr.write(err)
    ssh.close()
    return exit_status


if __name__ == "__main__":
    sys.exit(main())
