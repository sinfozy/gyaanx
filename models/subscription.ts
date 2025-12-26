import mongoose from "mongoose";


const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  paymentId: { type: String, required: true }, // Razorpay Payment ID
  orderId: String,                            // Razorpay Order ID
  amount: { type: Number, default: 199 },
  status: { type: String, default: "completed" },
  createdAt: { type: Date, default: Date.now }
});

export const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);