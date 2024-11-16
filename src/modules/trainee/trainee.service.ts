import { Types } from "mongoose";
import { ISchedule } from "../admin/admin.interface";
import { Schedule } from "../admin/admin.model";

const bookClass = async (
  classId: string,
  traineeId: string
): Promise<ISchedule | null> => {
  const updatedClass = await Schedule.findOneAndUpdate(
    { _id: classId },
    {
      $push: { trainees: traineeId },
    },
    { new: true, runValidators: true }
  );

  return updatedClass;
};
const viewEnrollClass = async (
  traineeId: string // We only need the traineeId to get all classes
): Promise<ISchedule[]> => {
  // Convert the traineeId to ObjectId if necessary
  const traineeObjectId = new Types.ObjectId(traineeId);

  const enrolledClasses = await Schedule.find({
    trainees: { $in: [traineeObjectId] }, // Ensure it's the correct type
  }).populate("trainer");

  return enrolledClasses;
};
export const TraineeService = {
  bookClass,
  viewEnrollClass,
};
