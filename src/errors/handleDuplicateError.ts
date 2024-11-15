import { MongoError } from "mongodb";
import { IGenericErrorMessage } from "../interfaces/error";

const duplicateError = (error: MongoError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: "",
      message: error.message,
    },
  ];

  return {
    message: "Email Must Have To Be Unique",
    errorCode: error.code,

    errorDetails: errors,
  };
};

export default duplicateError;
