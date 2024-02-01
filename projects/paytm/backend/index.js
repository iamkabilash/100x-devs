import express from "express";
import "dotenv/config";
import { connectDb } from "./db.js";
import rootRouter from "./routes/index.js";
import cors from "cors";

const app = express();
connectDb();
const PORT = 8989;

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log("Listening at: ", PORT);
});
