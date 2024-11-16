import express from "express";
import { TraineeController } from "./trainee.controller";
import CheckBookingLimit from "../../middlewares/checkBookingLimit";

const router = express.Router();

export const TraneeRoute = router;

router.patch("/book/:id", CheckBookingLimit, TraineeController.bookClass);
router.get("/view/:id", TraineeController.viewEnrollClass);
