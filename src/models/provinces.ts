import madrid from "../data/spain/provinces/madrid/madrid.json";
import allMadrid from "../data/spain/provinces/madrid/all.json";
import provinces from "../data/spain/provinces/provinces.json";

import { Path } from "node-geometry-library/lib/SphericalUtil";
import { PolyUtil } from "node-geometry-library";
import { Community } from "../lib/enums";

export class ProvinceModel {
  static getProvince = async (communityName: string, provinceName: string) => {
    switch (communityName) {
      case Community.MADRID: {
        switch (provinceName) {
          case "madrid":
            return madrid;
          default:
            return {};
        }
      }

      //   case "andalucia":
      //     return andalucia;
      //   case "asturias":
      //     return asturias;
      //   case "aragon":
      //     return aragon;
      //   case "balearic_islands":
      //     return balearic_islands;
      //   case "basque_country":
      //     return basque_country;
      //   case "canary_islands":
      //     return canary_islands;
      //   case "cantabria":
      //     return cantabria;
      //   case "castilla_la_mancha":
      //     return castilla_la_mancha;
      //   case "castilla_leon":
      //     return castilla_leon;
      //   case "catalunya":
      //     return catalunya;
      //   case "ceuta":
      //     return ceuta;
      //   case "extremadura":
      //     return extremadura;
      //   case "galicia":
      //     return galicia;
      //   case "la_rioja":
      //     return la_rioja;
      //   case "melilla":
      //     return melilla;
      //   case "murcia":
      //     return murcia;
      //   case "navarra":
      //     return navarra;
      //   case "valencia":
      //     return valencia;
      default:
        return {};
    }
  };

  static getProvinces = async (communityName: string) => {
    switch (communityName) {
      case Community.MADRID:
        return allMadrid;
      default:
        return {};
    }
  };

  static isLatLngInProvince = async (
    nameCommunity: string,
    nameProvince: string,
    lat: number,
    lng: number
  ) => {
    switch (nameCommunity) {
      case "madrid":
        return this.isLatLngInMadrid(lat, lng);
      //   case "andalucia":
      //     return this.isLatLngInAndalucia(lat, lng);
      //   case "asturias":
      //     return this.isLatLngInAsturias(lat, lng);
      //   case "aragon":
      //     return this.isLatLngInAragon(lat, lng);
      //   case "balearic_islands":
      //     return this.isLatLngInBalearicIslands(lat, lng);
      //   case "basque_country":
      //     return this.isLatLngInBasqueCountry(lat, lng);
      //   case "canary_islands":
      //     return this.isLatLngInCanaryIsland(lat, lng);
      //   case "cantabria":
      //     return this.isLatLngInCantabria(lat, lng);
      //   case "castilla_la_mancha":
      //     return this.isLatLngInCastillaLaMancha(lat, lng);
      //   case "castilla_leon":
      //     return this.isLatLngInCastillaLon(lat, lng);
      //   case "catalunya":
      //     return this.isLatLngInCatalunya(lat, lng);
      //   case "ceuta":
      //     return this.isLatLngInCeuta(lat, lng);
      //   case "extremadura":
      //     return this.isLatLngInExtremadura(lat, lng);
      //   case "galicia":
      //     return this.isLatLngInGalicia(lat, lng);
      //   case "la_rioja":
      //     return this.isLatLngInLaRioja(lat, lng);
      //   case "melilla":
      //     return this.isLatLngInMelilla(lat, lng);
      //   case "murcia":
      //     return this.isLatLngInMurcia(lat, lng);
      //   case "navarra":
      //     return this.isLatLngInNavarra(lat, lng);
      //   case "valencia":
      //     return this.isLatLngInValencia(lat, lng);

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
          isInside = ProvinceModel.inside(lat, lng, path);
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
