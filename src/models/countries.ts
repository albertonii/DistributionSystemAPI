import { Path } from "node-geometry-library/lib/SphericalUtil";
import spain from "../data/countries/spain.json";
// import spain from "../data/countries/spainv2.json";
import { PolyUtil } from "node-geometry-library";

// TODO: Falta Ceuta y Melilla por introducir en el mainland de la península.
export class CountryModel {
  static getCountry = async (name: string) => {
    switch (name) {
      case "spain":
        return spain;
      default:
        return {};
    }
  };

  static getCountries = async () => {
    return [spain];
  };

  static isLatLngInCountry = async (name: string, lat: number, lng: number) => {
    switch (name) {
      case "spain":
        return this.isLatLngInSpain(lat, lng);
      default:
        return false;
    }
  };

  /**
   * Geometry can be a Polygon or MultiPolygon
   * Polygon is the mainland
   * MultiPolygon is the islands - Canarias and Baleares
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSpain = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < spain.features.length; i++) {
      const geometryType = spain.features[i].geometry.type;
      console.log(geometryType);

      if (geometryType === "Polygon") {
        const polygon: number[][] = spain.features[i].geometry
          .coordinates[0] as number[][];

        const path = this.convertPolygonToPath(polygon);

        isInside = CountryModel.inside(lat, lng, path);
      } else if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < spain.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = spain.features[i].geometry.coordinates[
            j
          ][0] as number[][];
          const path = this.convertPolygonToPath(polygon);
          isInside = CountryModel.inside(lat, lng, path);
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
   * coordinate[0] is longitude
   * coordinate[1] is latitude
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
      return { lat: coordinate[1], lng: coordinate[0] };
    });

    return path;
  };

  static inside = (latitude: number, longitude: number, polygon: Path[]) => {
    const point: Path = { lat: latitude, lng: longitude };
    const isInside = PolyUtil.containsLocation(point, polygon);

    return isInside;
  };
}
