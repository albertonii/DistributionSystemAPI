# DistributionSystemAPI

Sistema de distribución para comprobar la disponibilidad de envío en Cervezanas

# About

## Motivation

# Getting started

# Example

# API Endpoints

# Testing

## Unit Testing with Jest

We separate app.ts and server.ts so it won't listen to the port after testing.

Start the server via script in packag.json

```json
"script": {
    "dev": "nodemon ./src/server.ts",
}
```

## Integration Testing with Jest + Supertest
