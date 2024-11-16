"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkClassLimit = void 0;
const date_fns_1 = require("date-fns");
const admin_model_1 = require("../modules/admin/admin.model");
const checkClassLimit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.body;
        if (!date) {
            res.status(400).json({ message: "Date is required." });
            return;
        }
        const start = (0, date_fns_1.startOfDay)(new Date(date));
        const end = (0, date_fns_1.endOfDay)(new Date(date));
        const scheduleCount = yield admin_model_1.Schedule.countDocuments({
            date: { $gte: start, $lte: end },
        });
        if (scheduleCount >= 5) {
            res
                .status(400)
                .json({ message: "Cannot create more than 5 schedules per day." });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.checkClassLimit = checkClassLimit;
