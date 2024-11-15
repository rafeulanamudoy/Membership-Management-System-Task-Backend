import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

import cookieParser from "cookie-parser";
import { routes } from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
