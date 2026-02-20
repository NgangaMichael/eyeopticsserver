"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expense_routes_1 = __importDefault(require("./modules/expenses/expense.routes"));
const user_routes_1 = __importDefault(require("./modules/users/user.routes"));
const stock_routes_1 = __importDefault(require("./modules/stocks/stock.routes"));
const patient_routes_1 = __importDefault(require("./modules/patients/patient.routes"));
const order_routes_1 = __importDefault(require("./modules/orders/order.routes"));
const sale_routes_1 = __importDefault(require("./modules/sales/sale.routes"));
const customer_routes_1 = __importDefault(require("./modules/customer/customer.routes"));
const jobcard_routes_1 = __importDefault(require("./modules/jobcard/jobcard.routes"));
const supplier_routes_1 = __importDefault(require("./modules/supplier/supplier.routes"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const router = (0, express_1.Router)();
// Health check
router.get("/health", (req, res) => res.json({ status: "ok" }));
// Auth (PUBLIC)
router.use("/auth", auth_routes_1.default);
// Protected modules
router.use("/users", user_routes_1.default);
router.use("/expenses", expense_routes_1.default);
router.use("/stocks", stock_routes_1.default);
router.use("/patients", patient_routes_1.default);
router.use("/orders", order_routes_1.default);
router.use("/sales", sale_routes_1.default);
router.use("/customers", customer_routes_1.default);
router.use("/suppliers", supplier_routes_1.default);
router.use("/jobcards", jobcard_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map