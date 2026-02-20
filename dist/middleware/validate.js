"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            console.error("❌ Validation failed:");
            console.error("Request body:", req.body);
            console.error("Zod errors:", JSON.stringify(err.issues, null, 2));
            return res.status(400).json({
                message: "Validation error",
                errors: err.issues, // ← Changed from err.errors to err.issues
            });
        }
        // For non-Zod errors
        console.error("❌ Unexpected error:", err);
        return res.status(400).json({
            message: "Validation error",
            errors: [{ message: err.message }],
        });
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map