import DB from "./src/config/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
dotenv.config();
DB();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server runs on port ${process.env.PORT}`);
});
