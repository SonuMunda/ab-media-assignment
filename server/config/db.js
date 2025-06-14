import mongoose from "mongoose";

const connectDatabase = async () => {
  const URL = process.env.MONGO_URL;
  try {
    if (!URL) {
      throw new Error("MONGO_URI is not found!");
    }
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connectDatabase;
