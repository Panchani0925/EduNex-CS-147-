const express = require("express");
const db = require("./db"); // Import the database connection

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Hello, EduNex!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});