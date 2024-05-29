const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Course, Admin } = require("../db");
const { SECRET, authenticateJwt } = require("../middleware/auth");
const router = express.Router();
router.get("/me", authenticateJwt, async (req, res) => {
  const admin = await Admin.findOne({ username: req.user.username });
  if (!admin) {
    res.status(403).json({ msg: "Admin Doesn't Exists" });
  }
  res.json({ username: admin.username });
});
module.exports = router;
