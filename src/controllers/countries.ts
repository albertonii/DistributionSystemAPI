import { Request, Response } from "express";
import { CountryModel } from "../models/countries";

export class CountryController {
  static async getCountry(req: Request, res: Response) {
    const { name } = req.params;

    // Lowercase the name to avoid case sensitive issues
    const lName = name.toLowerCase();

    const country = await CountryModel.getCountry(lName);
    res.json(country);
  }

  static async getCountries(req: Request, res: Response) {
    const countries = await CountryModel.getCountries();
    return res.json(countries);
  }

  static async isLatLngInCountry(req: Request, res: Response) {
    const { name } = req.params;
    const { lat, lng } = req.query;

    // Lowercase the name to avoid case sensitive issues
    const lName = name.toLowerCase();

    const isLatLngInCountry = await CountryModel.isLatLngInCountry(
      lName,
      Number(lat),
      Number(lng)
    );
    res.json(isLatLngInCountry);
  }
}
