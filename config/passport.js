"use strict";

require("dotenv").config();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const gitUser = require("../models/User");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.Callback_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const user = await gitUser.linkGithub();
        let existingUser;

        existingUser = await user.findOne({ githubId: profile.id });

        if (!existingUser) {
          // Link GitHub to existing account
          existinUser = await user.create({
            githubId: profile.id,
            username: profile.username,
            email: profile.emails?.[0]?.value || "",
          });
        }
        console.log(existingUser)
        return done(null, existingUser);
      } catch (err) {
        console.error("GitHub OAuth Error:", err.message);
        return done(err, null);
      }
    },
  ),
);

module.exports = passport;
