import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

// Create a Transaction
export const createTransaction = async (req, res) => {
  try {
    const senderId = req.user.id;
    const { receiverAccountNumber, amount, transactionType, pin } = req.body;

    if (!receiverAccountNumber && transactionType === "transfer") {
      return res.status(400).json({
        message: "Receiver account number is required for a transfer",
        success: false,
      });
    }
    if (!amount || amount <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0",
        success: false,
      });
    }

    // Find sender
    const sender = await User.findById(senderId);
    if (!sender) return res.status(404).json({ message: "Sender not found" });

    // Check if receiver exists for transfers
    let receiver = null;
    if (transactionType === "transfer") {
      receiver = await User.findOne({ accountNumber: receiverAccountNumber });
      if (!receiver)
        return res.status(404).json({ message: "Receiver not found" });
    }

    // Check sufficient funds for withdrawals and transfers
    if (transactionType !== "deposit" && sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    // Verify PIN
    const isPinValid = await bcrypt.compare(pin, sender.pin);
    if (!isPinValid) {
      return res.status(400).json({
        error: "Incorrect PIN",
      });
    }

    // Generate transaction reference
    const reference = uuidv4();

    // Create transaction
    const newTransaction = new Transaction({
      senderId,
      receiverAccount:
        transactionType === "transfer" ? receiver.accountNumber : null,
      amount,
      type: transactionType,
      reference,
      status: "pending",
    });

    await newTransaction.save();

    // Update balances
    if (transactionType === "deposit") {
      sender.balance += amount;
    } else {
      sender.balance -= amount;
      if (transactionType === "transfer" && receiver) {
        receiver.balance += amount;
      }
    }

    // Save updated balances
    await sender.save();
    if (receiver) await receiver.save();

    // Mark transaction as completed
    newTransaction.status = "completed";
    await newTransaction.save();

    res.status(201).json({ message: "Transaction successful", newTransaction });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Transaction failed", details: error.message });
  }
};

// Get Transaction by ID
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });

    res.status(200).json(transaction);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error retrieving transaction", details: error.message });
  }
};

// Get All Transactions for a User
export const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ senderId: req.user.id }).sort(
      "-timestamp"
    );
    res.status(200).json(transactions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error retrieving transactions", details: error.message });
  }
};
