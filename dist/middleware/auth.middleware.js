"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Fetch the secret key dynamically inside the middleware execution block
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: "Internal Server Configuration Error" });
    }
    try {
        const token = header.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, secret); // Pass the dynamically fetched secret
        req.user = decoded;
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.requireAuth = requireAuth;
//# sourceMappingURL=auth.middleware.js.map