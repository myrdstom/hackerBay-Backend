import { Router } from "express";
import AuthenticationController from "../../controllers/auth.controller";
import Validations from "../../util/validation";

const router = Router();
router.post(
  "/login",
  Validations.validity("login"),
  AuthenticationController.login
);

export default router;
