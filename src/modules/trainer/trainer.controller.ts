import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { TrainerService } from "./trainer.service";

const getClasses = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const id = req.params.id;
  const result = await TrainerService.getClasses(id);

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` Class  get successfully`,
      data: result,
    });
  }
});
export const TrainerController = {
  getClasses,
};
