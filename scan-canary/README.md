# Static scan validation fixture

This isolated directory tests signed PR webhook delivery, baseline/head comparison,
finding import, and AI triage. Nothing here is imported by the application.
The positive fixture contains a legacy digest rule pattern with constant public
input. It is a scanner canary, not an exploitable application vulnerability.
The SHA-256 fixture is a negative control. Do not merge this validation PR.
