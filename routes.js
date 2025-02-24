const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("./db");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./authMiddleware");
const authorizeRole = require("./roleMiddleware"); // Import RBAC Middleware
require("dotenv").config();

const router = express.Router();

/** 
 * -------------------------------
 *  User Management Endpoints
 * -------------------------------
 */

// Register Route
router.post("/register", async (req, res) => {
    const { name, email, password, role = "student" } = req.body; // Default role = "student"
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
//