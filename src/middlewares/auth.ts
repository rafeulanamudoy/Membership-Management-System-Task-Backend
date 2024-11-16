import { NextFunction, Request, Response } from "express";

import { Secret } from "jsonwebtoken";

import { jwtHelpers } from "../helpers/jwtHelpers";
import config from "../config";
import ApiError from "../errors/handleApiError";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(401, "Unauthorized access");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser; // role  , _id

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(403, "Forbidden");
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
