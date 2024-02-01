import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

export const authMiddleware = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const clientToken = bearerToken.split("Bearer ")[1];

  try {
    const decoded = jwt.verify(clientToken, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({});
  }
};
