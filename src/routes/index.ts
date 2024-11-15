import express from "express";
import { AuthRoute } from "../modules/auth/auth.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/account",
    route: AuthRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const routes = router;
