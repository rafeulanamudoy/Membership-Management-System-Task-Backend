import express from "express";
import AdminCredential from "./admin.middleware";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "../auth/auth.validation";
import { AuthController } from "../auth/auth.controller";
import { AdminController } from "./admin.controller";
import { checkClassLimit } from "../../middlewares/checkClassLimit";

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
router.delete(
  "/trainers/:id",

  AdminController.deleteSingleTrainer
);
router.post(
  "/createClass",
  checkClassLimit,

  AdminController.createSchedule
);
router.get(
  "/getClass",

  AdminController.getClass
);
router.get(
  "/trainer/:id",

  AdminController.getSingleTrainer
);
