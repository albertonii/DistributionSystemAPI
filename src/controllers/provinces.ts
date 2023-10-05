import { Request, Response } from "express";
import { ProvinceModel } from "../models/provinces";

export class ProvincesController {
  static async getProvince(req: Request, res: Response) {
    const { communityName, provinceName } = req.params;
    const provinces = await ProvinceModel.getProvince(
      communityName,
      provinceName
    );
    res.json(provinces);
  }

  static async getProvinces(req: Request, res: Response) {
    const { communityName } = req.params;
    const provinces = await ProvinceModel.getProvinces(communityName);
    return res.json(provinces);
  }

  static async isLatLngInProvinces(req: Request, res: Response) {
    const { nameCommunity, nameProvince } = req.params;
    const { lat, lng } = req.query;
    const isLatLngInProvinces = await ProvinceModel.isLatLngInProvince(
      nameCommunity,
      nameProvince,
      Number(lat),
      Number(lng)
    );
    res.json(isLatLngInProvinces);
  }
}
