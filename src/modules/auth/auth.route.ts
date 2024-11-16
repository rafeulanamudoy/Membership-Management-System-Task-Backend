import { AuthController } from "./auth.controller";

import express from "express";
import { AuthValidation } from "./auth.validation";
import validateRequest from "../../middlewares/validateRequest";
import AdminCredential from "../admin/admin.middleware";
const router = express.Router();

export const AuthRoute = router;
router.post(
  "/signUp",
  validateRequest(AuthValidation.signUpZodSchema),

  AuthController.createUser
);
router.post(
  "/signIn",

  validateRequest(AuthValidation.loginZodSchema),

  AuthController.loginUser
);

router.get(
  "/:email",

  AuthController.getSingleUser
);
router.patch(
  "/:id",

  AuthController.updateSingleUser
);
