import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const user = req.body;

  const result = await AuthService.createUser(user);

  if (result !== null) {
    const { password, ...others } = result;
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` Account created successfully`,
      data: others,
    });
  }
});
export const AuthController = {
  createUser,
};
