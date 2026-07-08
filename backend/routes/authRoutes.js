const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_EMAIL = "admin@labelzai.com";
const ADMIN_PASSWORD = "LabelzAI@2026";
const SESSION_SECRET_TOKEN = process.env.SESSION_SECRET_TOKEN || "labelzai_secure_admin_session_token_2026";

// POST /api/admin/login
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Email and password are required." });
    }

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, SESSION_SECRET_TOKEN, { expiresIn: "24h" });

    // Set secure HTTP-only cookie
    res.cookie("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: "/",
    });

    return res.json({ success: true, message: "Logged in successfully" });
  } catch (error) {
    console.error("Login route error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// POST /api/admin/logout
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("admin_session", { path: "/" });
    return res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout route error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// GET /api/admin/session
router.get("/session", (req, res) => {
  try {
    const token = req.cookies.admin_session;
    if (!token) {
      return res.json({ success: true, authenticated: false });
    }

    jwt.verify(token, SESSION_SECRET_TOKEN, (err) => {
      if (err) {
        return res.json({ success: true, authenticated: false });
      }
      return res.json({ success: true, authenticated: true });
    });
  } catch (error) {
    console.error("Session check route error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error", authenticated: false });
  }
});

module.exports = router;
