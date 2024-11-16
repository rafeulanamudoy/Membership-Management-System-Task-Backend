"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const duplicateError = (error) => {
    const errors = [
        {
            path: "",
            message: error.message,
        },
    ];
    return {
        message: "Email Must Have To Be Unique",
        errorCode: error.code,
        errorDetails: errors,
    };
};
exports.default = duplicateError;
