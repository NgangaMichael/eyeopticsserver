"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const env_1 = require("./config/env");
const app = (0, express_1.default)();
/* ---------------- CORS ---------------- */
// app.use(
//   cors({
//     origin:
//       NODE_ENV === "development"
//         ? "http://localhost:5173"
//         : CLIENT_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use((0, cors_1.default)({
    origin: env_1.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
/* ----------- Middleware ----------- */
app.use(express_1.default.json());
/* ----------- Routes ----------- */
app.use("/api", routes_1.default);
/* ----------- Error Handler ----------- */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map