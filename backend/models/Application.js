const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    default: "",
  },
  resumeName: {
    type: String,
    required: true,
  },
  resumeData: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
