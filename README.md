# DistributionSystemAPI

Sistema de distribución para comprobar la disponibilidad de envío en Cervezanas

# About

Esta API REST es capaz de mostrar la información en formato GeoJSON de cualquier país del mundo. Teniendo información exacta acerca del propio país, sus regiones y subregiones de manera sencilla a través de sus sencillos endpoints.

Actualmente soporta los siguiente países:
| País | Estructura Territorial | Soporte |
|------|------------------------|---------|
| España | Comunidad Autónoma > Provincia > Municipio | SI |

## Google Maps

La API de Maps JavaScript usa los siguientes sistemas de coordenadas:

- Valores de latitud y longitud que hacen referencia a un punto del planeta de manera inequívoca. (Google utiliza el estándar World Geodetic System WGS84).
- Coordenadas mundiales que hacen referencia a un punto del mapa de manera inequívoca.
- Coordenadas de píxeles, las cuales hacen referencia a píxeles específicos en el mapa con un nivel de zoom específico.
- Coordenadas del mosaico, las cuales hacen referencia a un mosaico específico en el mapa con un nivel de zoom específico.

### World Geodetic Sytem

El Sistema Geodésico Mundial (WGS) es un estándar utilizado en cartografía, geodesia y navegación por satélite, incluido el GPS. La versión actual, WGS 84, define un sistema de coordenadas fijo centrado en la Tierra y un datum geodésico, y también describe el Modelo Gravitacional Terrestre (EGM) y el Modelo Magnético Mundial (WMM) asociados. El estándar es publicado y mantenido por la Agencia Nacional de Inteligencia Geoespacial de Estados Unidos.

## Motivation

Distribution System API surge por la necesidad de conocer cuales son los puntos de distribución a los cuales un distribuidor puede realizar un envío.

# Getting started

# Example

# API Endpoints

## Countries

### Request

## GET

`Fetch data from country in GeoJSON format` /countries/${countryName} <br/>
`Fetch data from Autonomous Community in Spain in GeoJSON format` /communities/${countryName} <br/>
`Check if specific point [lat, lng] is inside Autonomous Community` /communities/${countryName}/inside?lat=[latitude]&lng=[longitude] <br/>

## Spain

### Countries

#### GET /countries/spain

Get basics data in GeoJSON format from Spain country.

**Parameters**
URL:
/countries/${countryName}

|          Name | Required |  Type  | Description                                             |
| ------------: | :------: | :----: | ------------------------------------------------------- |
| `countryName` | required | string | The country that we want the GeoJSON information. <br/> |

**Response**

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "SOVEREIGNT": "Spain",
        "NOTE_BRK": null,
        "NAME_SORT": "Canary Islands",

        "MIN_ZOOM": 0,
        "MIN_LABEL": 5,
        "MAX_LABEL": 10
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-17.88793945312497, 27.8095703125],
              [-17.984765624999966, 27.64638671875005]
            ]
          ]
        ]
      }
    },
  ...
]
}
```

### Autonomous Communities

#### GET /communities/madrid

Get basics data in GeoJSON format from Spain country.

**Parameters**
URL:
/communities/${communityName}

|            Name | Required |  Type  | Description                                                               |
| --------------: | :------: | :----: | ------------------------------------------------------------------------- |
| `communityName` | required | string | The Autonomous Community name that we want the GeoJSON information. <br/> |

**Response**

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [-3.536705, 41.160576],
              [-3.488751, 41.094294],
              [-3.425805, 41.082899],
              [-3.438935, 41.04267],
              [-3.39445, 41.000278],
              [-3.418296, 40.987564],
              [-3.444062, 40.906849],
              [-3.460577, 40.906659],
              ...
            ]
          ]
        ]
      },
      "properties": {
        "cod_ccaa": "13",
        "noml_ccaa": "COMUNIDAD DE MADRID",
        "name": "Madrid",
        "cartodb_id": 13,
        "created_at": "2014-09-30T00:00:00Z",
        "updated_at": "2014-12-25T02:07:41Z"
      }
    }
  ]
}
```

#### GET /communities/madrid?lat=[latitude]&lng=[longitude]

Check if a point [lat,lng] is inside a polygon representing Autonomous Community of Madrid

**Parameters**
URL:
/communities/${communityName}/inside?lat=-3.686062&lng=40.404208

Point = [-3.686062, 40.404208] Represents Atocha located in Madrid

|            Name | Required |  Type  | Description                                                               |
| --------------: | :------: | :----: | ------------------------------------------------------------------------- |
| `communityName` | required | string | The Autonomous Community name that we want the GeoJSON information. <br/> |
|           `lat` | required | string | Latitude. <br/>                                                           |
|           `lng` | required | string | Longitude. <br/>                                                          |

**Response**
If the point is inside polygon that represents the Autonomous Community then:

```
true
```

If the point is NOT inside polygon that represents the Autonomous Community then:

```
false
```

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

[https://distributionsystemapi-soyd-dev.fl0.io/
](https://distributionsystemapi-dev-tdzj.2.ie-1.fl0.io)

## TODO

- [ ] Pronvincias para España
- [ ] GeoJSON Portugal
- [ ] GeoJSON Francia
- [ ] GeoJSON Italia
- [ ] Versioning --> https://www.codemzy.com/blog/nodejs-api-versioning
