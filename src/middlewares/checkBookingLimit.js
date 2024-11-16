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
const admin_model_1 = require("../modules/admin/admin.model");
// Adjusted CheckBookingLimit middleware to not return the response
const CheckBookingLimit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const classId = req.params.id;
    try {
        const classSchedule = yield admin_model_1.Schedule.findById(classId);
        if (!classSchedule) {
            res.status(404).json({
                success: false,
                message: "Class not found",
            });
            return;
        }
        if (classSchedule.trainees.length >= classSchedule.maxCapacity) {
            res.status(400).json({
                success: false,
                message: "Class schedule is full. Maximum 10 trainees allowed per schedule",
            });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Error checking class full:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while checking class availability",
        });
    }
});
exports.default = CheckBookingLimit;
