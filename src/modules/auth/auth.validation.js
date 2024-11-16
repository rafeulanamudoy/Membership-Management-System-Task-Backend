"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const auth_1 = require("../../enums/auth");
const signUpZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: "First Name is Required",
            }),
            lastName: zod_1.z.string({
                required_error: "Last  Name is Required",
            }),
        }),
        email: zod_1.z
            .string({
            required_error: "Email is Required",
        })
            .email("this is not a valid email"),
        role: zod_1.z
            .string({
            required_error: "Role is Required",
        })
            .refine((value) => {
            return Object.values(auth_1.ENUM_USER_ROLE).includes(value);
        }, { message: "Invalid role" }),
        password: zod_1.z.string({
            required_error: "Password is Required",
        }),
        secret_key: zod_1.z.string({}).optional(),
    }),
});
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: "email is required",
        })
            .email("this is not a valid email"),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
exports.AuthValidation = {
    signUpZodSchema,
    loginZodSchema,
};
