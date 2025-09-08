import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001; // Added default port

// Remove path import since we're not using it
// import path from "path";

app.use(express.json());
app.use(cookieParser());

// Update CORS for production
// In src/index.js - update CORS
// In backend src/index.js
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://chatting-app-frontend-adsl.onrender.com" // ← YOUR FRONTEND URL
    ],
    credentials: true,
  })
);

// API routes only
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Remove completely the static file serving section
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});