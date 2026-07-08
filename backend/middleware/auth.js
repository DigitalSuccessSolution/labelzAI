const jwt = require("jsonwebtoken");

const SESSION_SECRET_TOKEN = process.env.SESSION_SECRET_TOKEN || "labelzai_secure_admin_session_token_2026";

function authenticateToken(req, res, next) {
  const token = req.cookies.admin_session;

  if (!token) {
    return res.status(401).json({ success: false, error: "Access denied. Admin session required." });
  }

  try {
    const verified = jwt.verify(token, SESSION_SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, error: "Invalid or expired session token." });
  }
}

module.exports = authenticateToken;
