const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/labelzai";

// Middlewares
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
}));
app.use(express.json({ limit: "15mb" })); // Increase limit to parse CV base64 data safely
app.use(express.urlencoded({ limit: "15mb", extended: true }));
app.use(cookieParser());

// Connect to MongoDB Database
console.log("Connecting to MongoDB...");
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("SUCCESS: Connected to MongoDB Database.");
  })
  .catch((err) => {
    console.error("ERROR: Failed to connect to MongoDB.");
    console.error("Ensure MongoDB is running locally at 127.0.0.1:27017, or set MONGODB_URI in your environment variables.");
    console.error("Diagnostic error details:", err.message);
  });

// API Routes
app.use("/api/admin", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/enquiries", enquiryRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "healthy", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`LabelzAI Server is running on port ${PORT}`);
  console.log(`Database source URI: ${MONGODB_URI}`);
});
// Reload database configs
