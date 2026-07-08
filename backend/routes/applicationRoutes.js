const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const authenticateToken = require("../middleware/auth");

// GET /api/applications: Fetch all candidate applications (Protected)
router.get("/", authenticateToken, async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: applications });
  } catch (error) {
    console.error("GET applications error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// POST /api/applications: Candidate submits application (Public)
router.post("/", async (req, res) => {
  try {
    const {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      experience,
      coverLetter,
      resumeName,
      resumeData,
    } = req.body;

    // Validation
    if (
      !jobId ||
      !jobTitle ||
      !fullName ||
      !email ||
      !phone ||
      !experience ||
      !resumeName ||
      !resumeData
    ) {
      return res.status(400).json({
        success: false,
        error: "Missing required application parameters",
      });
    }

    const newApplication = new Application({
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      experience,
      coverLetter: coverLetter || "",
      resumeName,
      resumeData,
    });

    await newApplication.save();

    return res.json({ success: true, data: newApplication });
  } catch (error) {
    console.error("POST application error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// DELETE /api/applications: Remove a candidate application (Protected)
router.delete("/", authenticateToken, async (req, res) => {
  try {
    const id = req.query.id || req.body.id;

    if (!id) {
      return res.status(400).json({ success: false, error: "Application ID is required" });
    }

    const deletedApp = await Application.findByIdAndDelete(id);
    if (!deletedApp) {
      return res.status(404).json({ success: false, error: "Application record not found" });
    }

    return res.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error("DELETE application error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
