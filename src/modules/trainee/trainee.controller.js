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
exports.TraineeController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const trainee_service_1 = require("./trainee.service");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const bookClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const id = req.params.id;
    const { traineeId } = req.body;
    const result = yield trainee_service_1.TraineeService.bookClass(id, traineeId);
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` class book   successfully`,
            data: result,
        });
    }
}));
const viewEnrollClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const id = req.params.id;
    const result = yield trainee_service_1.TraineeService.viewEnrollClass(id);
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` classes  get successfully`,
            data: result,
        });
    }
}));
exports.TraineeController = {
    bookClass,
    viewEnrollClass,
};
