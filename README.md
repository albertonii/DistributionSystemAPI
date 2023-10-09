# DistributionSystemAPI

Sistema de distribución para comprobar la disponibilidad de envío en Cervezanas

# About

Esta API REST es capaz de mostrar la información en formato GeoJSON de cualquier país del mundo. Teniendo información exacta acerca del propio país, sus regiones y subregiones de manera sencilla a través de sus sencillos endpoints.

Actualmente soporta los siguiente países:
| País | Estructura Territorial | Soporte |
|------|------------------------|---------|
| España | Comunidad Autónoma > Provincia > Municipio | SI |

## Motivation

Distribution System API surge por la necesidad de conocer cuales son los puntos de distribución a los cuales un distribuidor puede realizar un envío.

# Getting started

# Example

# API Endpoints

## Countries

### Request

`GET /countries`

## Spain

### Autonomous Communities

### Provinces

### Municipalities

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

# Deployment

## FL0

FL0 es una plataforma para agilizar los despliegues de tu producto. En este caso hemos decidido su uso por la fácil configuración que tiene a través de Github branches.
Sus principales ventajas son:

- Capa gratuita con grandes capacidades para testing antes de puesta en producción
  RAM 255MB
  DB Storgae 3GB
  Sistema de logs durante 1 día
  Autoscaling (en versiones de pago)

- Escalabilidad automática con el tráfico
- Alta disponibilidad
- Multiples entornos
- No hay que introducir tarjeta de crédito

## Endpoint

https://distributionsystemapi-soyd-dev.fl0.io/

## TODO

- [ ] Pronvincias para España
- [ ] GeoJSON Portugal
- [ ] GeoJSON Francia
- [ ] GeoJSON Italia
