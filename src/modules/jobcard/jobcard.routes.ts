import { Router } from "express";
import * as controller from "./jobcard.controller";

const router = Router();

router.post("/", controller.createJobCard);
router.get("/", controller.getJobCards);
router.get("/:id", controller.getJobCard);
router.put("/:id", controller.updateJobCard);
router.delete("/:id", controller.deleteJobCard);

export default router;