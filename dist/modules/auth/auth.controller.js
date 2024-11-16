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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const auth_service_1 = require("./auth.service");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const user = req.body;
    console.log(user, "check user");
    const result = yield auth_service_1.AuthService.createUser(user);
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` Account created successfully`,
            data: result,
        });
    }
}));
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = __rest(req.body, []);
    const result = yield auth_service_1.AuthService.loginUser(loginData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "User logged in successfully!",
        data: result,
    });
}));
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if userBody is undefined
    const email = req.params.email;
    const result = yield auth_service_1.AuthService.getSingleUser(email);
    if (result !== null) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: 201,
            message: ` User  get successfully`,
            data: result,
        });
    }
}));
const updateSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const result = yield auth_service_1.AuthService.updateSingleUser(id, updateData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: "User   updated successfully",
        data: result,
    });
}));
exports.AuthController = {
    createUser,
    loginUser,
    getSingleUser,
    updateSingleUser,
};
