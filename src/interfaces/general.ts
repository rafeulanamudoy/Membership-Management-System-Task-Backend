import { IGenericErrorMessage } from "./error";

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    count?: number;
  };
  data: T;
};
export type IGenericErrorResponse = {
  message: string;
  errorDetails: IGenericErrorMessage[];
};
