"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_controller_1 = require("./auth.controller");
const express_1 = __importDefault(require("express"));
const auth_validation_1 = require("./auth.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
exports.AuthRoute = router;
router.post("/signUp", (0, validateRequest_1.default)(auth_validation_1.AuthValidation.signUpZodSchema), auth_controller_1.AuthController.createUser);
router.post("/signIn", (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginZodSchema), auth_controller_1.AuthController.loginUser);
router.get("/:email", auth_controller_1.AuthController.getSingleUser);
router.patch("/:id", auth_controller_1.AuthController.updateSingleUser);
