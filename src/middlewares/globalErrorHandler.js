"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleApiError_1 = __importDefault(require("../errors/handleApiError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "something went wrong";
    let errorDetails = [];
    let errorCode;
    if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        message = simplifiedError.message;
        errorDetails = simplifiedError.errorDetails;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) == "CastError") {
        const simplifiedError = (0, handleCastError_1.default)(err);
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorDetails = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorDetails;
    }
    else if (err instanceof mongodb_1.MongoError && err.code === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorDetails = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorDetails;
        errorCode = simplifiedError.errorCode;
    }
    else if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        message = simplifiedError.message;
        errorDetails = simplifiedError.errorDetails;
    }
    else if (err instanceof handleApiError_1.default) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorDetails = (err === null || err === void 0 ? void 0 : err.message)
            ? [
                {
                    path: "",
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]
            : [];
    }
    else if (err instanceof Error) {
        message = err === null || err === void 0 ? void 0 : err.message;
        errorDetails = (err === null || err === void 0 ? void 0 : err.message)
            ? [
                {
                    path: "",
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]
            : [];
    }
    {
        res.status(statusCode).json({
            success: false,
            message,
            errorDetails,
            errorCode,
            stack: config_1.default.env !== "production" ? err === null || err === void 0 ? void 0 : err.stack : undefined,
        });
    }
};
exports.default = globalErrorHandler;
