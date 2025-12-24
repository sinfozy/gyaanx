import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

export const connectToDB = async () => {
  // 1. If already connected, return the existing database instance
  if (mongoose.connection.readyState >= 1) {
    return { db: mongoose.connection.db };
  }

  try {
    // 2. Establish connection
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");

    // 3. RETURN the db object so your API code can use it
    return { db: mongoose.connection.db };
  } catch (error) {
    console.error("DB Connection Error:", error);
    throw new Error("Failed to connect to database");
  }
};