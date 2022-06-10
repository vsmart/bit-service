# bit-service

A small Nodejs express service that fetches the current btc value in dollars and displays it.

## Contents

- app.js: Express application
- Dockerfile

## Getting started

To build locally, use `npm ci` and `npm start`. The app runs on Node 16.

## Todos & Future Improvements

- [Todo] Add CFN template to deploy to AWS Fargate
- [Todo] Set up ECR as docker registry
- [Todo] Add Github action for CI/CD
- [Todo] Tests, Linting, Better Error Handling
- [Improvement] Memcache current btc value per minute to avoid fetching it on each request
