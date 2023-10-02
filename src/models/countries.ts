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
}
