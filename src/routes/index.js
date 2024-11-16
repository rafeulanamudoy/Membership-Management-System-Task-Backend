"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const admin_route_1 = require("../modules/admin/admin.route");
const trainee_route_1 = require("../modules/trainee/trainee.route");
const trainer_route_1 = require("../modules/trainer/trainer.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/account",
        route: auth_route_1.AuthRoute,
    },
    {
        path: "/admin",
        route: admin_route_1.AdminRoutes,
    },
    {
        path: "/trainee",
        route: trainee_route_1.TraneeRoute,
    },
    {
        path: "/trainer",
        route: trainer_route_1.TrainerRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.routes = router;
