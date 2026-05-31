'use strict'
require("dotenv").config

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  
      next();
      console.log(decoded)

    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;