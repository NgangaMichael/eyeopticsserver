import { Router } from "express";
import * as controller from "./order.controller";

const router = Router();

router.post("/", controller.createOrder);
router.get("/", controller.getOrders);
router.get("/:id", controller.getOrder);
router.put("/:id", controller.updateOrder);
router.delete("/:id", controller.deleteOrder);

export default router;
