import express from "express";
import {
  createTransaction,
  getTransactionById,
  getUserTransactions,
} from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const transactionRoute = express.Router();

transactionRoute.post("/", authMiddleware, createTransaction);
transactionRoute.get("/:id", authMiddleware, getTransactionById);
transactionRoute.get("/user", authMiddleware, getUserTransactions);

export default transactionRoute;
