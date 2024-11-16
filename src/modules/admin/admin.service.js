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
exports.AdminService = void 0;
const auth_1 = require("../../enums/auth");
const auth_model_1 = require("../auth/auth.model");
const admin_model_1 = require("./admin.model");
const getTrainers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield auth_model_1.User.find({ role: auth_1.ENUM_USER_ROLE.Trainer });
    return users;
});
const updateSingleTrainer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.User.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteSingleTrainer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield auth_model_1.User.findByIdAndDelete(id);
    return deleteUser;
});
const createSchedule = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const schedule = admin_model_1.Schedule.create(data);
    return schedule;
});
const getClass = () => __awaiter(void 0, void 0, void 0, function* () {
    const classes = yield admin_model_1.Schedule.find({}).populate("trainer");
    return classes;
});
const getSingleTrainer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const trainer = yield auth_model_1.User.findById(id);
    return trainer;
});
exports.AdminService = {
    getTrainers,
    updateSingleTrainer,
    deleteSingleTrainer,
    createSchedule,
    getClass,
    getSingleTrainer,
};
