# Security

## Credential generation

Credentials must be generated using a cryptographically secure random
number generator.

Credentials must not be derived from:

- Dates
- Usernames
- Hostnames
- IP addresses
- Predictable counters

## Credential storage

Secrets must not be committed to Git.

Production credentials should be stored using an appropriate secrets
management mechanism.

## Rotation

The rotation process should:

1. Generate a new credential.
2. Store it securely.
3. Validate it.
4. Activate it.
5. Allow a short transition period if necessary.
6. Revoke the previous credential.

## Logging

Credentials must never appear in application logs.

## Administration

Administrative functions should require authenticated and authorized
administrator access.
