import { IUser } from "../auth/auth.interface";
import { User } from "../auth/auth.model";

const getTrainers = async (): Promise<IUser[] | null> => {
  const users = await User.find({});
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
export const AdminService = {
  getTrainers,
  updateSingleTrainer,
};
