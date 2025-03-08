import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Email format validation
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{11}$/, // Must be 11-digit number
    },
    accountNumber: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false, // Do not return password by default
    },
    transactionPin: {
      type: String,
      minlength: 4,
      maxlength: 4,
      select: false, // Hide PIN by default
    },
    balance: {
      type: Number,
      default: 10000, // Initial balance of 1o,000
    },
    verified: {
      type: Boolean,
      default: false, // Email verification required
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true, // If false, account is suspended
    },
  },
  { timestamps: true }
);

// 🔹 Auto-generate 10-digit account number from phone number
userSchema.pre("save", function (next) {
  if (this.isModified("phone")) {
    this.accountNumber = this.phone.slice(1); // Remove first digit
  }
  next();
});

// 🔹 Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// 🔹 Hash transaction PIN before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("transactionPin")) {
    const salt = await bcrypt.genSalt(10);
    this.transactionPin = await bcrypt.hash(this.transactionPin, salt);
  }
  next();
});

// 🔹 Compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// 🔹 Compare transaction PIN
userSchema.methods.compareTransactionPin = async function (candidatePin) {
  return await bcrypt.compare(candidatePin, this.transactionPin);
};

const User = mongoose.model("User", userSchema);
export default User;
