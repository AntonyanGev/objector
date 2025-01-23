import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB  connection failed", error.message);
    throw error;
  }
}
