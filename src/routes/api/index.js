import { Router } from "express";
import authRoute from "./auth.route";
import jsonRoute from "./jsonPatch.route";
import thumbnailRoute from "./thumbnail.route";
const routes = Router();

routes.use("/", authRoute);
routes.use("/", jsonRoute);
routes.use("/", thumbnailRoute);

export default routes;
