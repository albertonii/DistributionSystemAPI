import madrid from "../data/spain/autonomous_communities/madrid.json";
import { Path } from "node-geometry-library/lib/SphericalUtil";
import { PolyUtil } from "node-geometry-library";

export class CommunityModel {
  static getCommunity = async (name: string) => {
    switch (name) {
      case "madrid":
        return madrid;
      default:
        return {};
    }
  };

  static getCommunities = async () => {
    return [madrid];
  };

  static isLatLngInCommunity = async (
    name: string,
    lat: number,
    lng: number
  ) => {
    switch (name) {
      case "madrid":
        return this.isLatLngInMadrid(lat, lng);
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
