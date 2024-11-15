import { IUser } from "./auth.interface";
import { User } from "./auth.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create({
    ...user,
  });
  return createUser.toObject();
};
export const AuthService = {
  createUser,
};
