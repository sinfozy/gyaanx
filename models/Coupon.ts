import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  expiryDays: { type: Number, default: 90 }, // Kitne dino ke liye access milega
  isUsed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema);