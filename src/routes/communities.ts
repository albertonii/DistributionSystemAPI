import { Router } from "express";
import { CommunitiesController } from "../controllers/communities";

export const communitiesRouter = Router();

communitiesRouter.get("/", CommunitiesController.getCommunities);
communitiesRouter.get("/:name", CommunitiesController.getCommunity);
communitiesRouter.get(
  "/:name/inside",
  CommunitiesController.isLatLngInCommunities
);
communitiesRouter.get(
  "/json/spain",
  CommunitiesController.jsonSpainCommunities
);
