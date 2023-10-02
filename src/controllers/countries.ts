import { Request, Response } from "express";
import { CountryModel } from "../models/countries";

export class CountryController {
  static async getCountry(req: Request, res: Response) {
    const { name } = req.params;
    const country = await CountryModel.getCountry(name);
    res.json(country);
  }

  static async getCountries() {
    const countries = await CountryModel.getCountries();
    return countries;
  }
}
