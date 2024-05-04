import express from "express";
import { API_URL } from "@repo/common/config";

const app = express();

app.get("/", function (req, res) {
  res.json({ status: "healthy server", url: API_URL });
});

app.listen(8000);
