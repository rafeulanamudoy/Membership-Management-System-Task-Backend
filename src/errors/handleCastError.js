"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path,
            message: error.message,
        },
    ];
    return {
        message: "Cast Error",
        errorDetails: errors,
    };
};
exports.default = handleCastError;
