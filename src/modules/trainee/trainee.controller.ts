import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { TraineeService } from "./trainee.service";
import sendResponse from "../../shared/sendResponse";

const bookClass = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const id = req.params.id;
  const { traineeId } = req.body;
  const result = await TraineeService.bookClass(id, traineeId);

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` class book   successfully`,
      data: result,
    });
  }
});
const viewEnrollClass = catchAsync(async (req: Request, res: Response) => {
  // Check if userBody is undefined
  const id = req.params.id;

  const result = await TraineeService.viewEnrollClass(id);

  if (result !== null) {
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: ` classes  get successfully`,
      data: result,
    });
  }
});

export const TraineeController = {
  bookClass,
  viewEnrollClass,
};
