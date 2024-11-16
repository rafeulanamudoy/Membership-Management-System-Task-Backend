import express from "express";
import { TrainerController } from "./trainer.controller";

const router = express.Router();

export const TrainerRoute = router;

router.get(
  "/:id",

  TrainerController.getClasses
);
