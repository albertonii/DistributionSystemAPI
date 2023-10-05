import { Router } from "express";
import { ProvincesController } from "../controllers/provinces";

export const provincesRouter = Router();

provincesRouter.get("/:communityName", ProvincesController.getProvinces);
provincesRouter.get(
  "/:communityName/:provinceName",
  ProvincesController.getProvince
);
provincesRouter.get(
  "/:communityName/:provinceName/inside",
  ProvincesController.isLatLngInProvinces
);
