const express = require("express");
const db = require("./db");
const router = express.Router();

// Test database connection route
router.get("/test-db", (req, res) => {
    db.query("SELECT 1 + 1 AS result", (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database connection failed", error: err.message });
        }
        res.json({ message: "Database connection successful", result: results[0].result });
    });
});

module.exports = router;