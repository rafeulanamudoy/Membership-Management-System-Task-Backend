import { ISchedule } from "../admin/admin.interface";
import { Schedule } from "../admin/admin.model";

const getClasses = async (id: string): Promise<ISchedule[] | null> => {
  const classes = await Schedule.find({ trainer: id });
  return classes;
};

export const TrainerService = {
  getClasses,
};
