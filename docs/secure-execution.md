# Secure Python Execution Logic

## Flow
1. Mobile sends code + stdin + test metadata to `POST /execution/run`.
2. API validates payload and user quota/rate limits.
3. Execution service creates one-time sandbox job.
4. Sandbox runs code inside isolated container (or Firecracker microVM).
5. Captures stdout/stderr and structured verdict.
6. Returns output + pass/fail + execution metrics.

## Mandatory limits
- CPU time: 2s max
- Memory: 128MB max
- No outbound network
- Read-only filesystem except temp working dir
- Process whitelist and seccomp profile

## Container controls
- Rootless runtime
- User namespace remapping
- cgroups v2 hard limits
- Disabled privileged mode
- Disabled Docker socket access

## Optional WASM mode
For beginner/offline lessons, run Pyodide in-app with:
- pre-validated challenge inputs
- deterministic tests
- no external imports except allowed stdlib subset

## Anti-cheat and integrity
- Server-side test replay
- Hidden test cases
- Output similarity and timing anomaly detection
- Signed submission hashes
