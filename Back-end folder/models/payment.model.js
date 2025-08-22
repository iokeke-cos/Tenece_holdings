// If payment is integrated...

import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  bookingId: {type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true},
  amount: {type: Number, required: true},
  currency: {type: String, default: "USD"},
  status: {type: String, enum: ["pending", "success", "failed"], default: "pending"},
  transactionRef: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model("Payment", paymentSchema);