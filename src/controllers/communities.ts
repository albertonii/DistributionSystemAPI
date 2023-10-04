import { Request, Response } from "express";
import { CommunityModel } from "../models/communities";

export class CommunitiesController {
  static async getCommunity(req: Request, res: Response) {
    const { name } = req.params;
    const communities = await CommunityModel.getCommunity(name);
    res.json(communities);
  }

  static async getCommunities() {
    const countries = await CommunityModel.getCommunities();
    return countries;
  }

  static async isLatLngInCommunities(req: Request, res: Response) {
    const { name } = req.params;
    const { lat, lng } = req.query;
    const isLatLngInCommunities = await CommunityModel.isLatLngInCommunity(
      name,
      Number(lat),
      Number(lng)
    );
    res.json(isLatLngInCommunities);
  }
}
