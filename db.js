import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI, {
      connectTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000,  // 45 seconds
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectdb;
