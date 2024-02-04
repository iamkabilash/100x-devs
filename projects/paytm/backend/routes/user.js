import express from "express";
import {
  simple,
  signup,
  signin,
  updateUser,
  searchUser,
  getOtherUsers,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middleware.js";

const router = express.Router();

router.get("/", simple);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/", authMiddleware, updateUser);
router.get("/bulk", searchUser);
router.get("/friends", authMiddleware, getOtherUsers);

export default router;
