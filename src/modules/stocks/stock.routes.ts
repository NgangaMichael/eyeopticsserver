import { Router } from "express";
import * as controller from "./stock.controller";

const router = Router();

router.post("/", controller.createStock);
router.get("/", controller.getStocks);
router.get("/:id", controller.getStock);
router.put("/:id", controller.updateStock);
router.delete("/:id", controller.deleteStock);

export default router;
