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
exports.TraineeService = void 0;
const mongoose_1 = require("mongoose");
const admin_model_1 = require("../admin/admin.model");
const bookClass = (classId, traineeId) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedClass = yield admin_model_1.Schedule.findOneAndUpdate({ _id: classId }, {
        $push: { trainees: traineeId },
    }, { new: true, runValidators: true });
    return updatedClass;
});
const viewEnrollClass = (traineeId // We only need the traineeId to get all classes
) => __awaiter(void 0, void 0, void 0, function* () {
    // Convert the traineeId to ObjectId if necessary
    const traineeObjectId = new mongoose_1.Types.ObjectId(traineeId);
    const enrolledClasses = yield admin_model_1.Schedule.find({
        trainees: { $in: [traineeObjectId] }, // Ensure it's the correct type
    }).populate("trainer");
    return enrolledClasses;
});
exports.TraineeService = {
    bookClass,
    viewEnrollClass,
};
