import { Schema, model } from "mongoose";
import { UserRole } from "./auth.const";
import { IUser, IUserExistReturn, UserModel } from "./auth.interface";
import config from "../../config";

import bcrypt from "bcrypt";
import { ENUM_USER_ROLE } from "../../enums/auth";
const userSchema = new Schema<IUser, UserModel>(
  {
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    role: {
      type: String,
      enum: UserRole,
      default: ENUM_USER_ROLE.Trainee,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.statics.isUserExist = async function (
  email: string
): Promise<IUserExistReturn | null> {
  return await User.findOne({ email });
};
userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>("User", userSchema);
