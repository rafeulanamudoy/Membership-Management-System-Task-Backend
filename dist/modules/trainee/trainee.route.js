"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraneeRoute = void 0;
const express_1 = __importDefault(require("express"));
const trainee_controller_1 = require("./trainee.controller");
const checkBookingLimit_1 = __importDefault(require("../../middlewares/checkBookingLimit"));
const router = express_1.default.Router();
exports.TraneeRoute = router;
router.patch("/book/:id", checkBookingLimit_1.default, trainee_controller_1.TraineeController.bookClass);
router.get("/view/:id", trainee_controller_1.TraineeController.viewEnrollClass);
