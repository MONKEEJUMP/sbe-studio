#!/usr/bin/env python3
"""
SBE Studio — Phase 1 VPS Audit Runner (paramiko)

Connects to the DreamHost VPS over SSH using password auth.
The password is read exclusively from the SBE_SSH_PASS environment
variable and is deleted from process memory as soon as the SSH
handshake succeeds. No password material is ever written to a file,
log, script, or stdout.

Audit script is read from scripts/audit-phase1.sh and piped to the
remote `bash -s` interpreter. Remote stdout is streamed to local
stdout; remote stderr to local stderr. Remote writes its own copy
of the log to /home/dh_isibk9/vps-audit-phase1.log via `tee -a`
inside the audit script.

Exit codes:
  0   audit completed (remote bash exit 0)
  2   missing SBE_SSH_PASS env var
  3   SSH authentication failed
  4   SSH connection failed (network, timeout, unknown host key, etc.)
  N   remote bash exit N (non-zero)
"""
import os
import sys
import paramiko

HOST = "vps63781.dreamhostps.com"
PORT = 22
USER = "dh_isibk9"

here = os.path.dirname(os.path.abspath(__file__))
SCRIPT_PATH = os.path.join(here, "audit-phase1.sh")


def main() -> int:
    password = os.environ.get("SBE_SSH_PASS")
    if not password:
        sys.stderr.write(
            "ERROR: SBE_SSH_PASS environment variable not set.\n"
            "This script does not accept a password from the command line.\n"
        )
        return 2

    if not os.path.isfile(SCRIPT_PATH):
        sys.stderr.write(f"ERROR: audit script not found at {SCRIPT_PATH}\n")
        return 4

    with open(SCRIPT_PATH, "rb") as fh:
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
        sys.stderr.write("ERROR: SSH authentication failed (bad password).\n")
        return 3
    except Exception as exc:
        sys.stderr.write(f"ERROR: SSH connection failed: {exc!r}\n")
        return 4
    finally:
        # Scrub the password from local memory as aggressively as Python lets us.
        # This runs both on success and on failure.
        password = None
        try:
            del os.environ["SBE_SSH_PASS"]
        except KeyError:
            pass

    # Run `bash -s` on the remote and feed the audit script via stdin.
    stdin, stdout, stderr = ssh.exec_command("bash -s", timeout=240, get_pty=False)
    stdin.write(script_bytes)
    try:
        stdin.channel.shutdown_write()
    except Exception:
        pass

    # Stream stdout line by line so the local caller sees progress.
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
