import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true, min: 0 },
  type: { type: String, enum: ["deposit", "withdraw", "task"], required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  txid: { type: String },
  address: { type: String },
  planName: { type: String, enum: ["Silver", "Golden", "Diamond", null], default: null },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", TransactionSchema);