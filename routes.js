const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");
const { authenticateToken } = require("./authMiddleware");
const authorizeRole = require("./roleMiddleware");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();
// -------------------------------
// 1. Landing Page (Home Page)
// -------------------------------
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to EduNex!",
        description: "EduNex is a comprehensive learning platform for students, teachers, and parents.",
        features: [
            "Progress Tracking",
            "Communication Tools",
            "Live Classes",
            "Resource Hub",
            "Performance Analytics",
        ],
        testimonials: [
            {
                name: "John Doe",
                role: "Student",
                feedback: "EduNex helped me improve my grades and stay organized!",
            },
            {
                name: "Jane Smith",
                role: "Teacher",
                feedback: "The platform is intuitive and makes teaching so much easier.",
            },
        ],
        callToAction: "Get Started Today!",
    });
});
// -------------------------------
// 2. Login & Sign-Up Page
// -------------------------------

// Register Route
router.post("/register", async (req, res) => {
    const { name, email, password, role = "student" } = req.body;
    console.log("Registration payload:", { name, email, password, role });

    if (!password || typeof password !== "string") {
        return res.status(400).json({ message: "Invalid password format" });
    }
    // Check if user exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }


});
});
