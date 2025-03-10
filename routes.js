const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");
const { authenticateToken } = require("./authMiddleware");
const authorizeRole = require("./roleMiddleware");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();
