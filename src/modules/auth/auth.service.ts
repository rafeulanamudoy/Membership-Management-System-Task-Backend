import { Secret } from "jsonwebtoken";
import ApiError from "../../errors/handleApiError";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import { ILoginUser, IUser, UserResponse } from "./auth.interface";
import { User } from "./auth.model";
import config from "../../config";

const createUser = async (user: IUser): Promise<UserResponse | null> => {
  const createUser = await User.create({
    ...user,
  });
  const { _id, email: userEmail, role } = createUser.toObject();
  const accessToken = jwtHelpers.createToken(
    { _id, userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
  };
};
const loginUser = async (payload: ILoginUser): Promise<UserResponse | null> => {
  const { email, password } = payload;

  const isUserExist = await User.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(404, "User Doesn,t Exist");
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(401, "Password is incorrect");
  }

  const { _id, email: userEmail, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { _id, userEmail, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken,
  };
};
export const AuthService = {
  createUser,
  loginUser,
};
