import { AuthController } from "./auth.controller";

import express from "express";
import { AuthValidation } from "./auth.validation";
import validateRequest from "../../middlewares/validateRequest";
const router = express.Router();

export const AuthRoute = router;
router.post(
  "/signUp",
  validateRequest(AuthValidation.signUpZodSchema),
  AuthController.createUser
);
