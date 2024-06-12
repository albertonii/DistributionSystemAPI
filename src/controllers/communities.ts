import { Request, Response } from "express";
import { CommunityModel } from "../models/communities";

export class CommunitiesController {
  static async getCommunity(req: Request, res: Response) {
    const { name } = req.params;

    // Lowercase the name to avoid case sensitive issues
    const lName = name.toLowerCase();

    const communities = await CommunityModel.getCommunity(lName);
    res.json(communities);
  }

  static async getCommunities(req: Request, res: Response) {
    const communities = await CommunityModel.getCommunities();
    res.json(communities);
  }

  static async isLatLngInCommunities(req: Request, res: Response) {
    const { name } = req.params;
    // Lowercase the name to avoid case sensitive issues
    const lName = name.toLowerCase();

    const { lat, lng } = req.query;
    const isLatLngInCommunities = await CommunityModel.isLatLngInCommunity(
      lName,
      Number(lat),
      Number(lng)
    );

    res.json(isLatLngInCommunities);
  }

  static async jsonSpainCommunities(req: Request, res: Response) {
    const communities = await CommunityModel.jsonCommunities();
    console.log(communities);
    res.json(communities);
  }
}
