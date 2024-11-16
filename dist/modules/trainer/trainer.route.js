"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRoute = void 0;
const express_1 = __importDefault(require("express"));
const trainer_controller_1 = require("./trainer.controller");
const router = express_1.default.Router();
exports.TrainerRoute = router;
router.get("/:id", trainer_controller_1.TrainerController.getClasses);
