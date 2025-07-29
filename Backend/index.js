import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import hotelsRoute from "./Routes/hotels.js";
import roomsRoute from "./Routes/rooms.js";
import usersRoute from "./Routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load .env variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// MongoDB Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ MongoDB Connection Failed", error);
    }
};

// MongoDB Connection Events
mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("❌ MongoDB disconnected");
});

// Start the server
app.listen(5000, () => {
    connectDB();
    console.log("🚀 Server is running on Port 5000");
});
