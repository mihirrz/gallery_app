import express from "express";
import mongoose from "mongoose";
import galleryRoute from "./routes/image.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


app.use(express.json({ extended: true }));
app.use("/", galleryRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error(error.message);
  }
};

connectDB();

app.listen(PORT, () => console.log(`Server Started At PORT ${PORT}`));
