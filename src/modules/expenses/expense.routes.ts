import { Router } from "express";
import * as controller from "./expense.controller";

const router = Router();

router.post("/", controller.createExpense);
router.get("/", controller.getExpenses);
router.get("/:id", controller.getExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

export default router;
