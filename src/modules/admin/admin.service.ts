import { ENUM_USER_ROLE } from "../../enums/auth";
import { IUser } from "../auth/auth.interface";
import { User } from "../auth/auth.model";
import { ISchedule } from "./admin.interface";
import { Schedule } from "./admin.model";

const getTrainers = async (): Promise<IUser[] | null> => {
  const users = await User.find({ role: ENUM_USER_ROLE.Trainer });
  return users;
};
const updateSingleTrainer = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteSingleTrainer = async (id: string): Promise<IUser | null> => {
  const deleteUser = await User.findByIdAndDelete(id);
  return deleteUser;
};
const createSchedule = async (data: ISchedule) => {
  const schedule = Schedule.create(data);
  return schedule;
};

const getClass = async (): Promise<ISchedule[] | null> => {
  const classes = await Schedule.find({}).populate("trainer");
  return classes;
};
const getSingleTrainer = async (id: string): Promise<IUser | null> => {
  const trainer = await User.findById(id);
  return trainer;
};
export const AdminService = {
  getTrainers,
  updateSingleTrainer,
  deleteSingleTrainer,
  createSchedule,
  getClass,
  getSingleTrainer,
};
