import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isProfileComplete: { type: Boolean, default: false }, // NEW: to check if onboarding is done
  path: { type: String, default: "" }, // "school" or "comp"
  grade: { type: String, default: "" }, // "10th", "JEE", etc.
  isSubscribed: { type: Boolean, default: false }, // If true, redirect to Dashboard
  subscribedAt: Date,
  createdAt: { type: Date, default: Date.now },
  otp:{ type: String, },
  isVerified:{ type: Boolean, default: false }
});

export const User = models.User || model("User", UserSchema);