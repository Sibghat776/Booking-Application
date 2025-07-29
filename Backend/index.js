import dotenv from "dotenv";
// dotenv.config(); // <-- Yeh line Vercel deployment ke liye zaroori nahi, variables Vercel dashboard se aayenge

import express from "express";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import hotelsRoute from "./Routes/hotels.js";
import roomsRoute from "./Routes/rooms.js";
import usersRoute from "./Routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Initialize express app
const app = express();

// Middleware
// Production mein, 'origin' ko apne frontend domain se badal dain
app.use(cors({
    origin: process.env.FRONTEND_URL || "*", // Use environment variable for frontend URL
    credentials: true
}));
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
        stack: process.env.NODE_ENV === 'development' ? err.stack : {} // Stack trace only in development
    });
});

// MongoDB Connection Handling for Serverless Environment
// Connection ko cache karne ke liye global variable
let cachedDb = null;

const connectDB = async () => {
    if (cachedDb && mongoose.connection.readyState === 1) {
        console.log("✅ Using cached MongoDB connection");
        return cachedDb;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO);
        cachedDb = db; // Connection ko cache karein
        console.log("✅ New MongoDB connection established");
        return db;
    } catch (error) {
        console.error("❌ MongoDB Connection Failed", error);
        // Vercel serverless function mein process.exit(1) nahi karte
        throw new Error("MongoDB connection failed."); // Error ko throw karein
    }
};

// MongoDB Connection Events (Optional, for logging)
mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB connected (event listener)");
});

mongoose.connection.on("disconnected", () => {
    console.log("❌ MongoDB disconnected (event listener)");
});

// Vercel ko batane ke liye ke yeh Express app hai
// Har request par database connect karein (agar cached na ho)
app.get('*', async (req, res, next) => {
    try {
        await connectDB();
        next(); // Request ko agle middleware/route par bhej dain
    } catch (error) {
        next(error); // Connection error ko error handling middleware par bhej dain
    }
});

export default app;
