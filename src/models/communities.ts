import andalucia from "../data/spain/autonomous_communities/andalucia.json";
import asturias from "../data/spain/autonomous_communities/asturias.json";
import aragon from "../data/spain/autonomous_communities/aragon.json";
import balearic_islands from "../data/spain/autonomous_communities/balearic_islands.json";
import basque_country from "../data/spain/autonomous_communities/basque_country.json";
import canary_islands from "../data/spain/autonomous_communities/canary_islands.json";
import cantabria from "../data/spain/autonomous_communities/cantabria.json";
import castilla_la_mancha from "../data/spain/autonomous_communities/castilla_la_mancha.json";
import castilla_leon from "../data/spain/autonomous_communities/castilla_leon.json";
import catalunya from "../data/spain/autonomous_communities/catalunya.json";
import ceuta from "../data/spain/autonomous_communities/ceuta.json";
import extremadura from "../data/spain/autonomous_communities/extremadura.json";
import galicia from "../data/spain/autonomous_communities/galicia.json";
import la_rioja from "../data/spain/autonomous_communities/la_rioja.json";
import madrid from "../data/spain/autonomous_communities/madrid.json";
import melilla from "../data/spain/autonomous_communities/melilla.json";
import murcia from "../data/spain/autonomous_communities/murcia.json";
import navarra from "../data/spain/autonomous_communities/navarra.json";
import valencia from "../data/spain/autonomous_communities/valencia.json";
import { Path } from "node-geometry-library/lib/SphericalUtil";
import { PolyUtil } from "node-geometry-library";

export class CommunityModel {
  static getCommunity = async (name: string) => {
    switch (name) {
      case "madrid":
        return madrid;
      case "andalucia":
        return andalucia;
      case "asturias":
        return asturias;
      case "aragon":
        return aragon;
      case "balearic_islands":
        return balearic_islands;
      case "basque_country":
        return basque_country;
      case "canary_islands":
        return canary_islands;
      case "cantabria":
        return cantabria;
      case "castilla_la_mancha":
        return castilla_la_mancha;
      case "castilla_leon":
        return castilla_leon;
      case "catalunya":
        return catalunya;
      case "ceuta":
        return ceuta;
      case "extremadura":
        return extremadura;
      case "galicia":
        return galicia;
      case "la_rioja":
        return la_rioja;
      case "melilla":
        return melilla;
      case "murcia":
        return murcia;
      case "navarra":
        return navarra;
      case "valencia":
        return valencia;
      default:
        return {};
    }
  };

  static getCommunities = async () => {
    return [
      andalucia,
      asturias,
      aragon,
      balearic_islands,
      basque_country,
      canary_islands,
      cantabria,
      castilla_la_mancha,
      castilla_leon,
      catalunya,
      ceuta,
      extremadura,
      galicia,
      la_rioja,
      madrid,
      melilla,
      murcia,
      navarra,
      valencia,
    ];
  };

  static isLatLngInCommunity = async (
    name: string,
    lat: number,
    lng: number
  ) => {
    switch (name) {
      case "andalucia":
        return this.isLatLngInAndalucia(lat, lng);
      case "asturias":
        return this.isLatLngInAsturias(lat, lng);
      case "aragon":
        return this.isLatLngInAragon(lat, lng);
      case "balearic_islands":
        return this.isLatLngInBalearicIslands(lat, lng);
      case "basque_country":
        return this.isLatLngInBasqueCountry(lat, lng);
      case "canary_islands":
        return this.isLatLngInCanaryIsland(lat, lng);
      case "cantabria":
        return this.isLatLngInCantabria(lat, lng);
      case "castilla_la_mancha":
        return this.isLatLngInCastillaLaMancha(lat, lng);
      case "castilla_leon":
        return this.isLatLngInCastillaLon(lat, lng);
      case "catalunya":
        return this.isLatLngInCatalunya(lat, lng);
      case "ceuta":
        return this.isLatLngInCeuta(lat, lng);
      case "extremadura":
        return this.isLatLngInExtremadura(lat, lng);
      case "galicia":
        return this.isLatLngInGalicia(lat, lng);
      case "la_rioja":
        return this.isLatLngInLaRioja(lat, lng);
      case "madrid":
        return this.isLatLngInMadrid(lat, lng);
      case "melilla":
        return this.isLatLngInMelilla(lat, lng);
      case "murcia":
        return this.isLatLngInMurcia(lat, lng);
      case "navarra":
        return this.isLatLngInNavarra(lat, lng);
      case "valencia":
        return this.isLatLngInValencia(lat, lng);

      default:
        return false;
    }
  };

  /**
   * Polygon is Madrid
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMadrid = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < madrid.features.length; i++) {
      const geometryType = madrid.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < madrid.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = madrid.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Andalucia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAndalucia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < andalucia.features.length; i++) {
      const geometryType = andalucia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < andalucia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = andalucia.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Asturias
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAsturias = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < asturias.features.length; i++) {
      const geometryType = asturias.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < asturias.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = asturias.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Aragon
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAragon = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < aragon.features.length; i++) {
      const geometryType = aragon.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < aragon.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = aragon.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Geometry can be a Polygon or MultiPolygon
   * Polygon is Balearic Islands
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBalearicIslands = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < balearic_islands.features.length; i++) {
      const geometryType = balearic_islands.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < balearic_islands.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = balearic_islands.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Basque Country
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBasqueCountry = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < basque_country.features.length; i++) {
      const geometryType = basque_country.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < basque_country.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = basque_country.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Canary Island
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCanaryIsland = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < canary_islands.features.length; i++) {
      const geometryType = canary_islands.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < canary_islands.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = canary_islands.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Cantabria
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCantabria = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < cantabria.features.length; i++) {
      const geometryType = cantabria.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < cantabria.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = cantabria.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Castilla la Mancha
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCastillaLaMancha = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < castilla_la_mancha.features.length; i++) {
      const geometryType = castilla_la_mancha.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < castilla_la_mancha.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = castilla_la_mancha.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Castilla León
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCastillaLon = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < castilla_leon.features.length; i++) {
      const geometryType = castilla_leon.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < castilla_leon.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = castilla_leon.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Cataluña
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCatalunya = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < catalunya.features.length; i++) {
      const geometryType = catalunya.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < catalunya.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = catalunya.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Ceuta
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCeuta = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < ceuta.features.length; i++) {
      const geometryType = ceuta.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < ceuta.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = ceuta.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Extremadura
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInExtremadura = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < extremadura.features.length; i++) {
      const geometryType = extremadura.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < extremadura.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = extremadura.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Galicia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInGalicia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < galicia.features.length; i++) {
      const geometryType = galicia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < galicia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = galicia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * La Rioja
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLaRioja = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < la_rioja.features.length; i++) {
      const geometryType = la_rioja.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < la_rioja.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = la_rioja.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Melilla
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMelilla = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < melilla.features.length; i++) {
      const geometryType = melilla.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < melilla.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = melilla.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Murcia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMurcia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < murcia.features.length; i++) {
      const geometryType = murcia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < murcia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = murcia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Navarra
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInNavarra = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < navarra.features.length; i++) {
      const geometryType = navarra.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < navarra.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = navarra.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Valencia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInValencia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < valencia.features.length; i++) {
      const geometryType = valencia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < valencia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = valencia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = CommunityModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   *
   * @param coordinates Coordinates is a GeoJSON format.
   * @example
   * const coordinates =
   * [
   *    [
   *      [latitude, longitude],
   *      [latitude, longitude],
   *      [latitude, longitude]
   *    ],
   * ]
   * @returns
   */
  static convertPolygonToPath = (coordinates: number[][]) => {
    if (!Array.isArray(coordinates)) {
      throw new TypeError("Invalid coordinates. Array with locations expected");
    }

    const path: Path[] = coordinates.map((coordinate) => {
      return { lat: coordinate[0], lng: coordinate[1] };
    });

    return path;
  };

  static inside = (latitude: number, longitude: number, polygon: Path[]) => {
    const isInside = PolyUtil.containsLocation(
      { lat: latitude, lng: longitude },
      polygon
    );
    return isInside;
  };
}
