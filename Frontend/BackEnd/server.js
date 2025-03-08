import DB from "./src/config/db.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import transactionRoute from "../BackEnd/src/routes/transactionRoutes.js";

const app = express();
dotenv.config();
DB();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/transaction", transactionRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server runs on port ${process.env.PORT}`);
});
