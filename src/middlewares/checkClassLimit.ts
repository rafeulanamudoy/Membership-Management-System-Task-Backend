import { Request, Response, NextFunction } from "express";
import { startOfDay, endOfDay } from "date-fns";
import { Schedule } from "../modules/admin/admin.model";

export const checkClassLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date } = req.body;

    if (!date) {
      res.status(400).json({ message: "Date is required." });
      return;
    }

    const start = startOfDay(new Date(date));
    const end = endOfDay(new Date(date));

    const scheduleCount = await Schedule.countDocuments({
      date: { $gte: start, $lte: end },
    });

    if (scheduleCount >= 5) {
      res
        .status(400)
        .json({ message: "Cannot create more than 5 schedules per day." });
      return;
    }

    // If all checks pass, call next to move on to the next middleware/controller
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
