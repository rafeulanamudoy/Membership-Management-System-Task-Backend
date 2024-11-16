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
const config_1 = __importDefault(require("../../config"));
const auth_1 = require("../../enums/auth");
const handleApiError_1 = __importDefault(require("../../errors/handleApiError"));
const AdminCredential = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credential = req.body;
        console.log("admin middleware", req.body);
        if (!credential || !credential.role || !credential.secret_key) {
            throw new handleApiError_1.default(400, "Invalid request. Please provide both 'role' and 'secret_key'.");
        }
        if (credential.role !== auth_1.ENUM_USER_ROLE.Admin) {
            throw new handleApiError_1.default(400, "You Are Not Allowed to Create a  Admin Account. Role must be Admin.");
        }
        if (credential.secret_key !== config_1.default.admin_secret_key) {
            throw new handleApiError_1.default(400, "You Are Not Allowed to Create a  Admin Account. Provide Correct Secret key.");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = AdminCredential;
