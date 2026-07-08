const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, default: "" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
