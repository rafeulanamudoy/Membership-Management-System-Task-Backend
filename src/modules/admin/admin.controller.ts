import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthService } from "../auth/auth.service";
import sendResponse from "../../shared/sendResponse";

const createTrainer = catchAsync(async (req: Request, res: Response) => {
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
