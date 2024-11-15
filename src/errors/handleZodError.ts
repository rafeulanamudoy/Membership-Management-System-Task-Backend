import { ZodError, ZodIssue } from "zod";
import { IGenericErrorResponse } from "../interfaces/general";
import { IGenericErrorMessage } from "../interfaces/error";

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    message: " Validation error occurred.",
    errorDetails: errors,
  };
};

export default handleZodError;
