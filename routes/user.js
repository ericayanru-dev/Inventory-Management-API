'use strict'

const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();

// Register new user
router.post("/register", authController.register);

// Login user
router.post("/login", authController.login);

router.get("/users", authController.getAllUsers);

router.post("/logout", (req, res) => {
  try {
    // Clear the JWT cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ message: "Error logging out", error: err.message });
  }
});

module.exports = router;


module.exports = router;