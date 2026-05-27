#!/usr/bin/env python3
"""
Upload a single local file to the SBE Studio VPS via paramiko SFTP.
Password comes from SBE_SSH_PASS env var only.

Usage:
    SBE_SSH_PASS='...' py ssh-upload.py <local-path> <remote-path>
"""
import os
import sys
import paramiko

HOST = "vps63781.dreamhostps.com"
PORT = 22
USER = "dh_isibk9"


def main() -> int:
    if len(sys.argv) != 3:
        sys.stderr.write("Usage: ssh-upload.py <local-path> <remote-path>\n")
        return 2

    local_path, remote_path = sys.argv[1], sys.argv[2]
    if not os.path.isfile(local_path):
        sys.stderr.write(f"ERROR: local file not found: {local_path}\n")
        return 4

    password = os.environ.get("SBE_SSH_PASS")
    if not password:
        sys.stderr.write("ERROR: SBE_SSH_PASS not set.\n")
        return 2

    transport = paramiko.Transport((HOST, PORT))
    try:
        transport.connect(username=USER, password=password)
    except paramiko.AuthenticationException:
        sys.stderr.write("ERROR: SSH authentication failed.\n")
        return 3
    except Exception as exc:
        sys.stderr.write(f"ERROR: SSH transport failed: {exc!r}\n")
        return 4
    finally:
        password = None
        try:
            del os.environ["SBE_SSH_PASS"]
        except KeyError:
            pass

    try:
        sftp = paramiko.SFTPClient.from_transport(transport)
        if sftp is None:
            sys.stderr.write("ERROR: could not open SFTP subsystem.\n")
            return 4

        local_size = os.path.getsize(local_path)
        reported = {"last": 0}

        def progress(sent: int, total: int) -> None:
            pct = (sent * 100 // total) if total else 100
            if pct - reported["last"] >= 10 or sent == total:
                reported["last"] = pct
                sys.stdout.write(
                    f"  upload: {sent:,}/{total:,} bytes ({pct}%)\n"
                )
                sys.stdout.flush()

        sys.stdout.write(
            f"Uploading {local_path} -> {USER}@{HOST}:{remote_path} ({local_size:,} bytes)\n"
        )
        sftp.put(local_path, remote_path, callback=progress)
        sftp.close()
        sys.stdout.write("Upload complete.\n")
        return 0
    finally:
        transport.close()


if __name__ == "__main__":
    sys.exit(main())
