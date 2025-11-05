import { Router } from "express";
import dashboard from "./dashboard/routes.js";
const router = Router();
router.use("/dashboard", dashboard);
export default router;
