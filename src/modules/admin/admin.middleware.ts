import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { ENUM_USER_ROLE } from "../../enums/auth";
import ApiError from "../../errors/handleApiError";

const AdminCredential =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credential = req.body;

      if (!credential || !credential.role || !credential.secret_key) {
        throw new ApiError(
          400,
          "Invalid request. Please provide both 'role' and 'secret_key'."
        );
      }

      if (credential.role !== ENUM_USER_ROLE.Admin) {
        throw new ApiError(
          400,
          "You Are Not Allowed to Create a  Admin Account. Role must be Admin."
        );
      }

      if (credential.secret_key !== config.admin_secret_key) {
        throw new ApiError(
          400,
          "You Are Not Allowed to Create a  Admin Account. Provide Correct Secret key."
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default AdminCredential;
