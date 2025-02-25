const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  try {
      console.log("📩 Received Register Request:", req.body);

      // 🔹 Match frontend field names
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
          console.log("⚠️ Missing Fields:", { name, email, password });
          return res.status(400).json({ error: "All fields are required" });
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();

      console.log("✅ User Registered:", newUser);
      res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
      console.error("❌ Registration Error:", error);
      res.status(500).json({ error: "Error registering user", details: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    console.log("🔑 Received Login Request:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(400).json({ error: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid password attempt for:", email);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT Token (Use environment variable for security)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login Successful:", email);
    res.json({ message: "Login successful!", token });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
