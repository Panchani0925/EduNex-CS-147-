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

// Admin Dashboard - Only accessible to "admin"
router.get("/admin/dashboard", authenticateToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "Welcome to the Admin Dashboard" });
});

// Profile - Accessible to "admin" and "student"
router.get("/profile", authenticateToken, authorizeRole("student", "admin"), (req, res) => {
    const userId = req.user.id;
    db.query("SELECT id, name, email, role FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.length === 0) return res.status(404).json({ message: "User not found" });
        res.json({ user: result[0] });
    });
});

// Get all users (Admin only)
router.get("/users", authenticateToken, authorizeRole("admin"), (req, res) => {
    db.query("SELECT id, name, email, role FROM users", (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ users: result });
    });
});

// Delete a user (Admin only)
router.delete("/users/:id", authenticateToken, authorizeRole("admin"), (req, res) => {
    const userId = req.params.id;
    db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    });
});

// Update user profile (Admin & Student)
router.put("/profile", authenticateToken, authorizeRole("student", "admin"), async (req, res) => {
    const userId = req.user.id;
    const { name, password } = req.body;
    let updateFields = [];
    let values = [];
    if (name) {
        updateFields.push("name = ?");
        values.push(name);
    }
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateFields.push("password = ?");
        values.push(hashedPassword);
    }
    if (updateFields.length === 0) {
        return res.status(400).json({ message: "No changes provided" });
    }
    values.push(userId);
    const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE id = ?`;
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ message: "Profile updated successfully" });
    });
});

// Dashboard Endpoint (Enhanced User Profiles - Part 1)
router.get("/dashboard", authenticateToken, (req, res) => {
    const userId = req.user.id;
    const userRole = req.user.role;
    if (userRole === "student") {
        // Query for students: fetch enrolled courses (requires enrollments and courses tables)
        const query = `
            SELECT c.id, c.name, c.description, e.enrolled_date 
            FROM enrollments e 
            JOIN courses c ON e.course_id = c.id 
            WHERE e.student_id = ?`;
        db.query(query, [userId], (err, courses) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json({ role: "student", dashboard: { courses } });
        });
    } else if (userRole === "teacher") {
        // Query for teachers: fetch courses managed by teacher
        const query = `SELECT id, name, description FROM courses WHERE teacher_id = ?`;
        db.query(query, [userId], (err, courses) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json({ role: "teacher", dashboard: { courses } });
        });
    } else if (userRole === "parent") {
        // Query for parents: fetch linked student's progress (requires parent_child and progress tables)
        const query = `
            SELECT s.id, s.name, p.progress 
            FROM students s 
            JOIN parent_child pc ON s.id = pc.student_id 
            LEFT JOIN progress p ON s.id = p.student_id 
            WHERE pc.parent_id = ?`;
        db.query(query, [userId], (err, progressData) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json({ role: "parent", dashboard: { progress: progressData } });
        });
    } else {
        res.status(403).json({ message: "Unauthorized role" });
    }
});


/** 
 * -------------------------------
 *  Course Management Endpoints (Part 2)
 * -------------------------------
 */

/* 
  2.1 Create a New Course (Teacher Only)
  Endpoint: POST /api/courses
  Request Body Example:
  {
      "name": "Introduction to Biology",
      "description": "A course on fundamental biology concepts",
      "prerequisites": "None"
  }
*/
router.post("/courses", authenticateToken, (req, res) => {
    if (req.user.role !== "teacher") {
        return res.status(403).json({ message: "Only teachers can create courses" });
    }
    const teacherId = req.user.id;
    const { name, description, prerequisites } = req.body;
    const sql = "INSERT INTO courses (name, description, teacher_id, prerequisites) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, description, teacherId, prerequisites], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: "Course created successfully", courseId: result.insertId });
    });
});

/*
  2.2 Update Course Details (Teacher Only)
  Endpoint: PUT /api/courses/:id
  Request Body Example:
  {
      "name": "Advanced Biology",
      "description": "Updated course description",
      "prerequisites": "Basic Biology"
  }
*/
router.put("/courses/:id", authenticateToken, (req, res) => {
    if (req.user.role !== "teacher") {
        return res.status(403).json({ message: "Only teachers can update courses" });
    }
    const courseId = req.params.id;
    const teacherId = req.user.id;
    const { name, description, prerequisites } = req.body;
    // First, check if the course belongs to the teacher
    const checkSql = "SELECT * FROM courses WHERE id = ? AND teacher_id = ?";
    db.query(checkSql, [courseId, teacherId], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        if (result.length === 0) {
            return res.status(403).json({ message: "You are not authorized to update this course" });
        }
        let updateFields = [];
        let values = [];
        if (name) { updateFields.push("name = ?"); values.push(name); }
        if (description) { updateFields.push("description = ?"); values.push(description); }
        if (prerequisites) { updateFields.push("prerequisites = ?"); values.push(prerequisites); }
        if (updateFields.length === 0) {
            return res.status(400).json({ message: "No update fields provided" });
        }
        values.push(courseId);
        const updateSql = `UPDATE courses SET ${updateFields.join(", ")} WHERE id = ?`;
        db.query(updateSql, values, (err, result) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json({ message: "Course updated successfully" });
        });
    });
});

/*
  2.3 List Courses
  Endpoint: GET /api/courses
  This returns all courses. You can add filters as needed.
*/
router.get("/courses", authenticateToken, (req, res) => {
    const sql = "SELECT id, name, description, teacher_id, prerequisites, created_at FROM courses";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ courses: result });
    });
});

/*
  2.4 Student Enrollment
  Endpoint: POST /api/enrollments
  Request Body Example:
  {
      "course_id": 1
  }
  Only students can enroll.
*/
router.post("/enrollments", authenticateToken, (req, res) => {
    if (req.user.role !== "student") {
        return res.status(403).json({ message: "Only students can enroll" });
    }
    const studentId = req.user.id;
    const { course_id } = req.body;
    const sql = "INSERT INTO enrollments (course_id, student_id) VALUES (?, ?)";
    db.query(sql, [course_id, studentId], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: "Enrolled successfully", enrollmentId: result.insertId });
    });
});

/*
  2.5 Retrieve Deadlines
  Endpoint: GET /api/deadlines
  Only students retrieve deadlines for courses they are enrolled in.
*/
router.get("/deadlines", authenticateToken, (req, res) => {
    if (req.user.role !== "student") {
        return res.status(403).json({ message: "Only students can view deadlines" });
    }
    const studentId = req.user.id;
    const sql = `
        SELECT d.id, d.assignment_title, d.deadline_date, c.name AS course_name 
        FROM deadlines d 
        JOIN courses c ON d.course_id = c.id 
        JOIN enrollments e ON c.id = e.course_id 
        WHERE e.student_id = ?`;
    db.query(sql, [studentId], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ deadlines: result });
    });
});

module.exports = router;
