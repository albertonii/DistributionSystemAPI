import { Request, Response } from "express";
import { CommunityModel } from "../models/communities";

export class CommunitiesController {
  static async getCommunity(req: Request, res: Response) {
    const { name } = req.params;
    const communities = await CommunityModel.getCommunity(name);
    res.json(communities);
  }

  static async getCommunities(req: Request, res: Response) {
    const communities = await CommunityModel.getCommunities();
    return res.json(communities);
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
