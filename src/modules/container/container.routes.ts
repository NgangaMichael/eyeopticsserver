import { Router } from "express";
import * as controller from "./container.controller";

const router = Router();

// Container CRUD
router.post("/", controller.createContainer);
router.get("/", controller.getContainers);
router.get("/:id", controller.getContainer);
router.put("/:id", controller.updateContainer);
// Add this line under your other item routes
router.put("/:id/items/:itemId", controller.updateItem);
router.delete("/:id", controller.deleteContainer);

// Container Items
router.post("/:id/items", controller.addItem);
router.post("/:id/items/bulk", controller.bulkAddItems);
router.delete("/:id/items/:itemId", controller.deleteItem);

// Receive
router.post("/:id/receive", controller.receiveContainer);

export default router;