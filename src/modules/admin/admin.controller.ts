import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AuthService } from "../auth/auth.service";
import sendResponse from "../../shared/sendResponse";
import { AdminService } from "./admin.service";
import { IUser } from "../auth/auth.interface";

const getTrainer = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined

  const result = await AdminService.getTrainers();

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` Tainsers get successfully`,
      data: result,
    });
  }
});
const updateSingleTrainer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AdminService.updateSingleTrainer(id, updateData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: 201,

    message: "Trainer  updated successfully",
    data: result,
  });
});
const deleteSingleTrainer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AdminService.deleteSingleTrainer(id);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: 201,

    message: "Trainer deleted  successfully",
    data: result,
  });
});
export const AdminController = {
  getTrainer,
  updateSingleTrainer,
  deleteSingleTrainer,
};
