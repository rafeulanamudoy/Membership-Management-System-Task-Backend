import { Request, Response, NextFunction } from "express";
import { Schedule } from "../modules/admin/admin.model";

// Adjusted CheckBookingLimit middleware to not return the response
const CheckBookingLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const classId = req.params.id;

  try {
    const classSchedule = await Schedule.findById(classId);

    if (!classSchedule) {
      res.status(404).json({
        success: false,
        message: "Class not found",
      });
      return;
    }

    if (classSchedule.trainees.length >= classSchedule.maxCapacity) {
      res.status(400).json({
        success: false,
        message:
          "Class schedule is full. Maximum 10 trainees allowed per schedule",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Error checking class full:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while checking class availability",
    });
  }
};

export default CheckBookingLimit;
