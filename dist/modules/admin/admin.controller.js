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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const admin_service_1 = require("./admin.service");
const getTrainer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const result = yield admin_service_1.AdminService.getTrainers();
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` Tainsers get successfully`,
            data: result,
        });
    }
}));
const updateSingleTrainer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const result = yield admin_service_1.AdminService.updateSingleTrainer(id, updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Trainer  updated successfully",
        data: result,
    });
}));
const deleteSingleTrainer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield admin_service_1.AdminService.deleteSingleTrainer(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Trainer deleted  successfully",
        data: result,
    });
}));
const createSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const classSchedule = req.body;
    console.log("class scedule", classSchedule);
    const result = yield admin_service_1.AdminService.createSchedule(classSchedule);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "Class Schedule Create  successfully",
        data: result,
    });
}));
const getClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const result = yield admin_service_1.AdminService.getClass();
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` Classes get successfully`,
            data: result,
        });
    }
}));
const getSingleTrainer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const id = req.params.id;
    const result = yield admin_service_1.AdminService.getSingleTrainer(id);
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` Trainer  get successfully`,
            data: result,
        });
    }
}));
exports.AdminController = {
    getTrainer,
    updateSingleTrainer,
    deleteSingleTrainer,
    createSchedule,
    getClass,
    getSingleTrainer,
};
