import express from "express";
import AdminCredential from "./admin.middleware";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "../auth/auth.validation";
import { AuthController } from "../auth/auth.controller";

const router = express.Router();

export const AdminRoutes = router;
router.post(
  "/signUp",

  AdminCredential(),

  validateRequest(AuthValidation.signUpZodSchema),

  AuthController.createUser
);
router.post(
  "/trainer",

  validateRequest(AuthValidation.signUpZodSchema),

  AuthController.createUser
);
