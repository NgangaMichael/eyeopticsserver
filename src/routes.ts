import { Router } from "express";
import expenseRoutes from "./modules/expenses/expense.routes";
import userRoutes from "./modules/users/user.routes";
import stockRoutes from "./modules/stocks/stock.routes";
import patientRoutes from "./modules/patients/patient.routes";
import orderRoutes from "./modules/orders/order.routes";
import salesRoutes from "./modules/sales/sale.routes";
import authRoutes from "./modules/auth/auth.routes";

const router = Router();

// Health check
router.get("/health", (req, res) => res.json({ status: "ok" }));

// Auth (PUBLIC)
router.use("/auth", authRoutes);

// Protected modules
router.use("/users", userRoutes);
router.use("/expenses", expenseRoutes);
router.use("/stocks", stockRoutes);
router.use("/patients", patientRoutes);
router.use("/orders", orderRoutes);
router.use("/sales", salesRoutes);

export default router;
