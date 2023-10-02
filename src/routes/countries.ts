import { Router } from "express";
import { CountryController } from "../controllers/countries";

export const countriesRouter = Router();

countriesRouter.get("/", CountryController.getCountries);
countriesRouter.get("/:name", CountryController.getCountry);
countriesRouter.get("/:name/inside", CountryController.isLatLngInCountry);
