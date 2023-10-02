import spain from "../data/countries/spain.json";

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

  static isLatLngInSpain = (lat: number, lng: number) => {
    let isInside = false;

    // Canarias
    const polygonCanaryIslands = spain.features[0].geometry.coordinates;
    const elHierro = polygonCanaryIslands[0][0];

    isInside = CountryModel.inside(lat, lng, elHierro); // El Hierro --> True
    // CountryModel.inside(27.75, -18.0, elHierro); // El Hierro --> True
    // CountryModel.inside(28.333332, -14.0166666, elHierro); // Fuerteventura --> False

    //localhost:8080/countries/spain/inside?lat=27.75&lng=-18.0 --> True

    // Baleares
    const polygonBaleares = spain.features[1].geometry.coordinates[0][0];

    // Peninsula
    const polygonMainLand = spain.features[2].geometry.coordinates[0][0];

    return isInside;
  };

  static inside = (lat: number, lng: number, polygon: any) => {
    let isInside = false;

    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0],
        yi = polygon[i][1];

      const xj = polygon[j][0],
        yj = polygon[j][1];

      const intersect =
        yi > lat != yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;

      if (intersect) {
        isInside = !isInside;
        break;
      }
    }

    return isInside;
  };
}
