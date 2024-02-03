import express from "express";
import { authMiddleware } from "../middleware.js";
import { getBalance, transferMoney } from "../controller/account.controller.js";

const router = express.Router();

router.get("/balance", authMiddleware, getBalance);
router.post("/transfer", authMiddleware, transferMoney);

export default router;
