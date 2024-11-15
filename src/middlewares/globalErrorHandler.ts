import { ErrorRequestHandler } from "express";

import { MongoError } from "mongodb";
import { ZodError } from "zod";

import config from "../config";
import handleValidationError from "../errors/handleValidationError";
import { IGenericErrorMessage } from "../interfaces/error";
import handleCastError from "../errors/handleCastError";
import duplicateError from "../errors/handleDuplicateError";
import handleZodError from "../errors/handleZodError";
import ApiError from "../errors/handleApiError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "something went wrong";
  let errorDetails: IGenericErrorMessage[] = [];
  let errorCode;

  if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);

    message = simplifiedError.message;
    errorDetails = simplifiedError.errorDetails;
  } else if (err?.name == "CastError") {
    const simplifiedError = handleCastError(err);

    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
  } else if (err instanceof MongoError && err.code === 11000) {
    const simplifiedError = duplicateError(err);

    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
    errorCode = simplifiedError.errorCode;
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);

    message = simplifiedError.message;
    errorDetails = simplifiedError.errorDetails;
  } else if (err instanceof ApiError) {
    message = err?.message;
    errorDetails = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  } else if (err instanceof Error) {
    message = err?.message;

    errorDetails = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  }

  {
    res.status(statusCode).json({
      success: false,
      message,
      errorDetails,
      errorCode,

      stack: config.env !== "production" ? err?.stack : undefined,
    });
  }
};

export default globalErrorHandler;
