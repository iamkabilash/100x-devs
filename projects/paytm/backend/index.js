import express from "express";
import "dotenv/config";
import { connectDb } from "./db.js";

const app = express();
connectDb();
const PORT = 8989;

app.listen(PORT, () => {
  console.log("Listening at: ", PORT);
});
