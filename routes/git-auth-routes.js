"use strict";


require("dotenv").config();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");


const router = express.Router();

// GitHub Login
router.get("/", passport.authenticate("github", { scope: ["user:emails"] }));

// GitHub Callback
router.get("/callback", passport.authenticate("github", { session: false }), (req, res) => {
  try {
    console.log(req.user)
    const token = jwt.sign(
      { userId: req.user._id, email: req.user.email, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };

    console.log("Issuing JWT for GitHub user:", token);

    res.cookie("token", token, cookieOptions);
    res.redirect("/api-docs");
  } catch(err) {
    console.error("error issuing JWt: ", err.message)
    res.status(500).json({Internal:" internal server erro"})
  }
});

module.exports = router;
