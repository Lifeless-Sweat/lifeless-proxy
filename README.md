# LIFELESS PROXY

A security-focused, self-hosted proxy management project with a
dark-red administration interface and automated short-lived credential
rotation.

## Features

- Dark-red administration dashboard
- Authentication
- Short-lived credentials
- Automated credential rotation
- Credential expiration
- Credential revocation
- Rate limiting
- Audit logging
- Docker support
- Automated GitHub checks

## Security

Lifeless Proxy is intended for infrastructure and network services
that you own or are authorized to administer.

Never commit production credentials to this repository.

See [Security](docs/security.md) for more information.

## Project structure

```text
server/       Server components
web/          Web interface
tests/        Automated tests
docs/         Documentation
.github/      GitHub automation
