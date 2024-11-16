import express from "express";
import { AuthRoute } from "../modules/auth/auth.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { TraneeRoute } from "../modules/trainee/trainee.route";
import { TrainerRoute } from "../modules/trainer/trainer.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/account",
    route: AuthRoute,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/trainee",
    route: TraneeRoute,
  },
  {
    path: "/trainer",
    route: TrainerRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const routes = router;
