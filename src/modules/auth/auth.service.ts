import { Secret } from "jsonwebtoken";
import ApiError from "../../errors/handleApiError";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import { ILoginUser, ILoginUserResponse, IUser } from "./auth.interface";
import { User } from "./auth.model";
import config from "../../config";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create({
    ...user,
  });
  return createUser.toObject();
};
const loginUser = async (
  payload: ILoginUser
): Promise<ILoginUserResponse | null> => {
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
  const refreshToken = jwtHelpers.createToken(
    { _id, userEmail, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};
export const AuthService = {
  createUser,
  loginUser,
};
