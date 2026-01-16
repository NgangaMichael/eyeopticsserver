import { Router } from "express";
import * as controller from "./sale.controller";

const router = Router();

router.post("/", controller.createSale);
router.get("/", controller.getSales);
router.get("/:id", controller.getSale);
// router.put("/:id", controller.updateSale);
router.delete("/:id", controller.deleteSale);

export default router;
