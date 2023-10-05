import { Request, Response } from "express";
import { CountryModel } from "../models/countries";

export class CountryController {
  static async getCountry(req: Request, res: Response) {
    const { name } = req.params;
    const country = await CountryModel.getCountry(name);
    res.json(country);
  }

  static async getCountries(req: Request, res: Response) {
    const countries = await CountryModel.getCountries();
    return res.json(countries);
  }

  static async isLatLngInCountry(req: Request, res: Response) {
    const { name } = req.params;
    const { lat, lng } = req.query;
    const isLatLngInCountry = await CountryModel.isLatLngInCountry(
      name,
      Number(lat),
      Number(lng)
    );
    res.json(isLatLngInCountry);
  }
}
