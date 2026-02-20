"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTP_HOST = exports.EMAIL_PASS = exports.EMAIL_USER = exports.JWT_SECRET = exports.DATABASE_URL = exports.NODE_ENV = exports.CLIENT_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function required(name) {
    const value = process.env[name];
    if (!value)
        throw new Error(`Missing env variable: ${name}`);
    return value;
}
exports.PORT = Number(required("API_PORT"));
exports.CLIENT_URL = required("CLIENT_URL");
exports.NODE_ENV = process.env.NODE_ENV || "development";
exports.DATABASE_URL = required("DATABASE_URL");
exports.JWT_SECRET = required("JWT_SECRET");
exports.EMAIL_USER = required("EMAIL_USER");
exports.EMAIL_PASS = required("EMAIL_PASS");
exports.SMTP_HOST = required("SMTP_HOST");
//# sourceMappingURL=env.js.map