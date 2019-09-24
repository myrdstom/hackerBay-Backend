import { Router } from "express";
import authRoute from "./auth.route";

const routes = Router();

routes.use("/", authRoute);

export default routes;
