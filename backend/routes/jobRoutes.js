const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const Application = require("../models/Application");
const authenticateToken = require("../middleware/auth");

// GET /api/jobs: Fetch all active positions (Public)
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: jobs });
  } catch (error) {
    console.error("GET jobs error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// POST /api/jobs: Create a new job opening (Protected)
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, location, type, model } = req.body;

    // Validation
    if (!title || !location || !type || !model) {
      return res.status(400).json({
        success: false,
        error: "All fields are required (title, location, type, model)",
      });
    }

    if (!["Full Time", "Part Time", "Contract"].includes(type)) {
      return res.status(400).json({ success: false, error: "Invalid position type" });
    }

    if (!["On Site", "Hybrid", "Work From Home"].includes(model)) {
      return res.status(400).json({ success: false, error: "Invalid work model" });
    }

    const newJob = new Job({ title, location, type, model });
    await newJob.save();

    return res.json({ success: true, data: newJob });
  } catch (error) {
    console.error("POST job error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// DELETE /api/jobs: Remove a job requisition (Protected)
router.delete("/", authenticateToken, async (req, res) => {
  try {
    const id = req.query.id || req.body.id;

    if (!id) {
      return res.status(400).json({ success: false, error: "Job ID is required" });
    }

    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ success: false, error: "Job opening not found" });
    }

    // Clean up all applications submitted to this deleted job
    await Application.deleteMany({ jobId: id });

    return res.json({ success: true, message: "Job and related applications deleted successfully" });
  } catch (error) {
    console.error("DELETE job error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
