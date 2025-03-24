require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Default MySQL user
    password: "", 
    database: "mydatabase", 
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Fetch all students
app.get("/users", (req, res) => {
    db.query("SELECT id, name, password, status FROM users", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Student
app.post("/users", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "INSERT INTO users (name, password, status) VALUES (?, ?, ?)";
    db.query(sql, [name, password, status], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student added successfully", id: result.insertId });
        }
    });
});

// Update a Student
app.put("/users/:id", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "UPDATE users SET name = ?, password = ?, status = ? WHERE id = ?";
    db.query(sql, [name, password, status, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student updated successfully" });
        }
    });
});

// Delete a Student
app.delete("/users/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student deleted successfully" });
        }
    });
});

