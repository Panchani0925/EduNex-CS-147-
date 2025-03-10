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
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            // Insert User with role
            db.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
                [name, email, hashedPassword, role],
                (err, result) => {
                    if (err) return res.status(500).json({ message: err.message });
                    res.status(201).json({ message: "User registered successfully" });
                });
        } catch (hashError) {
            console.error("Error hashing password:", hashError);
            res.status(500).json({ message: "Password encryption failed" });
        }

});
});
// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }
        const user = result[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid password" });
            }
            // Generate a JWT token including the user's id and role
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            res.json({ message: "Login successful", token, role: user.role });
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ message: "An error occurred during login" });
        }


    });
});
 //Forgot Password - Send Reset Link
 router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
 if (!email) return res.status(400).json({ message: "Email is required" });

 db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
 if (err) return res.status(500).json({ message: err.message });
        if (result.length === 0) return res.status(404).json({ message: "User not found" });

        const user = result[0];
        const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
        //const resetLink = https://yourplatform.com/reset-password?token=${resetToken};

        // Send reset link via email (use nodemailer or similar)
        console.log("Reset Link:", resetLink); // Replace with actual email sending logic
        res.json({ message: "Reset link sent to your email" });
    });
    });
    // Reset Password
router.post("/reset-password", (req, res) => {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) return res.status(400).json({ message: "Token and new password are required" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: "Error hashing password" });
            db.query("UPDATE users SET password = ? WHERE id = ?", [hashedPassword, userId], (err, result) => {
                if (err) return res.status(500).json({ message: err.message });
                res.json({ message: "Password reset successfully" });
            });
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid or expired token" });
    }
});
// -------------------------------
// 3. Student Dashboard
// -------------------------------

// Get Student Dashboard
router.get("/student/dashboard", authenticateToken, authorizeRole("student"), (req, res) => {
    const userId = req.user.id;
    // Fetch enrolled courses
    const coursesQuery = `
        SELECT c.id, c.name, c.description, e.enrolled_date 
        FROM enrollments e 
        JOIN courses c ON e.course_id = c.id 
        WHERE e.student_id = ?`;
    db.query(coursesQuery, [userId], (err, courses) => {
        if (err) {
            console.error("Error fetching enrolled courses:", err);
            return res.status(500).json({ message: "Failed to fetch enrolled courses" });
        }

});
});
