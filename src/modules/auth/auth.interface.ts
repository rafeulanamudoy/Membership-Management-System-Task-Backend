import mongoose, { Model } from "mongoose";
import { ENUM_USER_ROLE } from "../../enums/auth";

export type IUser = {
  password: string;
  email: string;

  name: {
    firstName: string;
    lastName: string;
  };

  role: ENUM_USER_ROLE;
};

export type IUserExistReturn = {
  _id: mongoose.Types.ObjectId;
  email: string;

  password: string;
  role: ENUM_USER_ROLE;
};
export type ILoginUser = {
  email: string;
  password: string;
};
export type ILoginUserResponse = {
  refreshToken?: string;
  accessToken: string;
};
export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUserExistReturn, "email" | "password" | "_id" | "role">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
export type IUserRole = "trainer" | "admin" | "trainee";
