import config from "../../config";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IUser } from "./auth.interface";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const user = req.body;
  console.log(user, "check user");
  const result = await AuthService.createUser(user);

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` Account created successfully`,
      data: result,
    });
  }
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await AuthService.loginUser(loginData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User logged in successfully!",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const email = req.params.email;
  const result = await AuthService.getSingleUser(email);

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` User  get successfully`,
      data: result,
    });
  }
});
const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AuthService.updateSingleUser(id, updateData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: 201,

    message: "User   updated successfully",
    data: result,
  });
});
export const AuthController = {
  createUser,
  loginUser,
  getSingleUser,
  updateSingleUser,
};
