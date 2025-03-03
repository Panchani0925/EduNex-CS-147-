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

// Forgot Password - Send Reset Link
// router.post("/forgot-password", (req, res) => {
//     const { email } = req.body;
//     if (!email) return res.status(400).json({ message: "Email is required" });

//     db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
//         if (err) return res.status(500).json({ message: err.message });
//         if (result.length === 0) return res.status(404).json({ message: "User not found" });

//         const user = result[0];
//         const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
//         const resetLink = https://yourplatform.com/reset-password?token=${resetToken};

//         // Send reset link via email (use nodemailer or similar)
//         console.log("Reset Link:", resetLink); // Replace with actual email sending logic
//         res.json({ message: "Reset link sent to your email" });
//     });
// });

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

        // Fetch upcoming assignments
        const assignmentsQuery = `
            SELECT a.id, a.title, a.deadline, c.name AS course_name 
            FROM assignments a 
            JOIN courses c ON a.course_id = c.id 
            JOIN enrollments e ON c.id = e.course_id 
            WHERE e.student_id = ? AND a.deadline > NOW()`;
        db.query(assignmentsQuery, [userId], (err, assignments) => {
            if (err) {
                console.error("Error fetching upcoming assignments:", err);
                return res.status(500).json({ message: "Failed to fetch upcoming assignments" });
            }

            // Fetch performance analytics
            const performanceQuery = `
                SELECT a.course_id, c.name AS course_name, AVG(s.grade) AS average_grade 
FROM submissions s 
JOIN assignments a ON s.assignment_id = a.id 
JOIN courses c ON a.course_id = c.id 
WHERE s.student_id = ? 
GROUP BY a.course_id;`;
            db.query(performanceQuery, [userId], (err, performance) => {
                if (err) {
                    console.error("Error fetching performance analytics:", err);
                    return res.status(500).json({ message: "Failed to fetch performance analytics" });
                }

                // Send the response
                res.json({
                    message: "Welcome to your dashboard!",
                    courses,
                    assignments,
                    performance,
                });
            });
        });
    });
});

// -------------------------------
// 4. Teacher Dashboard
// -------------------------------

// Get Teacher Dashboard
router.get("/teacher/dashboard", authenticateToken, authorizeRole("teacher"), (req, res) => {
    const userId = req.user.id;

    // Fetch courses managed by the teacher
    const coursesQuery = `
        SELECT id, name, description 
        FROM courses 
        WHERE teacher_id = ?`;
    db.query(coursesQuery, [userId], (err, courses) => {
        if (err) {
            console.error("Error fetching courses:", err);
            return res.status(500).json({ message: "Failed to fetch courses" });
        }

        // Fetch student performance data
        const performanceQuery = `
            SELECT s.student_id, u.name AS student_name, AVG(s.grade) AS average_grade 
            FROM submissions s 
            JOIN users u ON s.student_id = u.id 
            JOIN assignments a ON s.assignment_id = a.id 
            JOIN courses c ON a.course_id = c.id 
            WHERE c.teacher_id = ? 
            GROUP BY s.student_id`;
        db.query(performanceQuery, [userId], (err, performance) => {
            if (err) {
                console.error("Error fetching performance data:", err);
                return res.status(500).json({ message: "Failed to fetch performance data" });
            }

            // Send the response
            res.json({
                message: "Welcome to your dashboard!",
                courses,
                performance,
            });
        });
    });
});

// -------------------------------
// 5. Parent Dashboard
// -------------------------------

// Get Parent Dashboard
router.get("/parent/dashboard", authenticateToken, authorizeRole("parent"), (req, res) => {
    const userId = req.user.id;

    // Fetch linked students
    const studentsQuery = `
        SELECT u.id, u.name, u.email 
        FROM users u 
        JOIN parent_child pc ON u.id = pc.student_id 
        WHERE pc.parent_id = ?`;
    db.query(studentsQuery, [userId], (err, students) => {
        if (err) {
            console.error("Error fetching linked students:", err);
            return res.status(500).json({ message: "Failed to fetch linked students" });
        }

        // If no students are linked, return an empty progress array
        if (students.length === 0) {
            return res.json({
                message: "Welcome to your dashboard!",
                students: [],
                progress: [],
            });
        }

        // Fetch progress for each student
        const studentIds = students.map((student) => student.id);
        const progressQuery = `
            SELECT p.student_id, c.name AS course_name, p.grade, p.attendance 
            FROM progress p 
            JOIN courses c ON p.course_id = c.id 
            WHERE p.student_id IN (?)`;
        db.query(progressQuery, [studentIds], (err, progress) => {
            if (err) {
                console.error("Error fetching progress data:", err);
                return res.status(500).json({ message: "Failed to fetch progress data" });
            }

            // Send the response
            res.json({
                message: "Welcome to your dashboard!",
                students,
                progress,
            });
        });
    });
});
// -------------------------------
// 6. Course Page (For Students & Teachers)
// -------------------------------

// Get Course Details
router.get("/courses/:id", authenticateToken, (req, res) => {
    const courseId = req.params.id;

    // Fetch course details
    const courseQuery = "SELECT id, name, description, teacher_id FROM courses WHERE id = ?";
    db.query(courseQuery, [courseId], (err, course) => {
        if (err) {
            console.error("Error fetching course details:", err);
            return res.status(500).json({ message: "Failed to fetch course details" });
        }

        // Fetch course modules
        const modulesQuery = "SELECT id, title, description FROM course_modules WHERE course_id = ?";
        db.query(modulesQuery, [courseId], (err, modules) => {
            if (err) {
                console.error("Error fetching course modules:", err);
                return res.status(500).json({ message: "Failed to fetch course modules" });
            }

            // Fetch course resources
            const resourcesQuery = "SELECT id, title, file_path, type FROM resources WHERE course_id = ?";
            db.query(resourcesQuery, [courseId], (err, resources) => {
                if (err) {
                    console.error("Error fetching course resources:", err);
                    return res.status(500).json({ message: "Failed to fetch course resources" });
                }

                res.json({
                    course: course[0], // Return the first (and only) course object
                    modules,
                    resources,
                });
            });
        });
    });
});
// -------------------------------
// 7. Assignment Submission Page (For Students)
// -------------------------------

// Submit Assignment
router.post("/assignments/submit", authenticateToken, authorizeRole("student"), (req, res) => {
    const { assignmentId, file_path } = req.body;
    const studentId = req.user.id;

    const sql = "INSERT INTO submissions (assignment_id, student_id, file_path) VALUES (?, ?, ?)";
    db.query(sql, [assignmentId, studentId, file_path], (err, result) => {
        if (err) {
            console.error("Error submitting assignment:", err);
            return res.status(500).json({ message: "Failed to submit assignment" });
        }
        res.status(201).json({ message: "Assignment submitted successfully", submissionId: result.insertId });
    });
});
// -------------------------------
// 8. Performance Analytics Page (For Students & Parents)
// -------------------------------

// Get Performance Analytics
router.get("/performance", authenticateToken, (req, res) => {
    const userId = req.user.id;

    const query = `
        SELECT c.name AS course_name, AVG(s.grade) AS average_grade 
        FROM submissions s 
        JOIN assignments a ON s.assignment_id = a.id 
        JOIN courses c ON a.course_id = c.id 
        WHERE s.student_id = ? 
        GROUP BY c.id`;
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Error fetching performance analytics:", err);
            return res.status(500).json({ message: "Failed to fetch performance analytics" });
        }
        res.json({ performance: result });
    });
});

// -------------------------------
// 9. Resource Hub (Educational Library)
// -------------------------------

// Get Resources
router.get("/resources", authenticateToken, (req, res) => {
    const query = "SELECT id, title, file_path, type FROM resources";
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error fetching resources:", err);
            return res.status(500).json({ message: "Failed to fetch resources" });
        }
        res.json({ resources: result });
    });
});
// -------------------------------
// 10. Communication & Notifications System
// -------------------------------

// Get Notifications
router.get("/notifications", authenticateToken, (req, res) => {
    const userId = req.user.id;

    const query = "SELECT id, message, is_read, created_at FROM notifications WHERE user_id = ?";
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Error fetching notifications:", err);
            return res.status(500).json({ message: "Failed to fetch notifications" });
        }
        res.json({ notifications: result });
    });
});

// -------------------------------
// 11. Live Classes Page
// -------------------------------

// Get Live Classes
router.get("/live-classes", authenticateToken, (req, res) => {
    const query = "SELECT id, title, description, scheduled_at FROM live_classes";
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error fetching live classes:", err);
            return res.status(500).json({ message: "Failed to fetch live classes" });
        }
        res.json({ liveClasses: result });
    });
});

// -------------------------------
// 12. Notifications & Alerts Page
// -------------------------------

// Get Alerts
router.get("/alerts", authenticateToken, (req, res) => {
    const userId = req.user.id;

    const query = `
        SELECT id, message, created_at 
        FROM notifications 
        WHERE user_id = ? AND is_read = FALSE`;
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Error fetching alerts:", err);
            return res.status(500).json({ message: "Failed to fetch alerts" });
        }
        res.json({ alerts: result });
    });
});
// -------------------------------
// 13. Parent Dashboard Enhancements
// -------------------------------

// Get Parent Alerts
router.get("/parent/alerts", authenticateToken, authorizeRole("parent"), (req, res) => {
    const userId = req.user.id;

    const query = `
        SELECT n.id, n.message, n.created_at 
        FROM notifications n 
        JOIN parent_child pc ON n.user_id = pc.student_id 
        WHERE pc.parent_id = ? AND n.is_read = FALSE`;
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error("Error fetching parent alerts:", err);
            return res.status(500).json({ message: "Failed to fetch parent alerts" });
        }
        res.json({ alerts: result });
    });
});

// -------------------------------
// 14. Student Wellbeing & Assistance Tools
// -------------------------------

// Submit Anonymous Feedback
router.post("/anonymous-feedback", authenticateToken, (req, res) => {
    const { courseId, feedback } = req.body;

    const sql = "INSERT INTO anonymous_feedback (course_id, feedback) VALUES (?, ?)";
    db.query(sql, [courseId, feedback], (err, result) => {
        if (err) {
            console.error("Error submitting anonymous feedback:", err);
            return res.status(500).json({ message: "Failed to submit feedback" });
        }
        res.status(201).json({ message: "Feedback submitted successfully", feedbackId: result.insertId });
    });
});
// -------------------------------
// 15. Admin Dashboard (For School Admins)
// -------------------------------

// Get All Users (Admin Only)
router.get("/admin/users", authenticateToken, authorizeRole("admin"), (req, res) => {
    const sql = "SELECT id, name, email, role FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ message: "Failed to fetch users" });
        }
        res.json({ users: result });
    });
});
// Delete User (Admin Only)
router.delete("/admin/users/:id", authenticateToken, authorizeRole("admin"), (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Error deleting user:", err);
            return res.status(500).json({ message: "Failed to delete user" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    });
});

module.exports = router;