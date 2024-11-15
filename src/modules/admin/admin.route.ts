import express from "express";
import AdminCredential from "./admin.middleware";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "../auth/auth.validation";
import { AuthController } from "../auth/auth.controller";
import { AdminController } from "./admin.controller";

const router = express.Router();

export const AdminRoutes = router;
router.post(
  "/signUp",

  AdminCredential(),

  validateRequest(AuthValidation.signUpZodSchema),

  AuthController.createUser
);
router.post(
  "/trainers",

  validateRequest(AuthValidation.signUpZodSchema),

  AuthController.createUser
);
router.get(
  "/trainers",

  AdminController.getTrainer
);
router.patch(
  "/trainers/:id",

  AdminController.updateSingleTrainer
);
