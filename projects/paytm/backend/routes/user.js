import express from "express";
import {
  simple,
  signup,
  signin,
  updateUser,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middleware.js";

const router = express.Router();

router.get("/", simple);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/", authMiddleware, updateUser);

export default router;
