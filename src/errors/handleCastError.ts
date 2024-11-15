import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  return {
    message: "Cast Error",
    errorDetails: errors,
  };
};

export default handleCastError;
