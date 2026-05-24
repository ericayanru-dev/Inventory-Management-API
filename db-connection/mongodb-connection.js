"use strict";

const mongoose = require("mongoose");
require("dotenv").config();


let db;

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState===1 && db) {
      console.log("Database already connected reusing existing connection");
      return db;
    }
    db = await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connection established");
    return db;
  } catch (err) {
    if (err instanceof mongoose.Error) {
      console.error("this is a mongoose error:", err.message);
    } else {
      console.error("this is a general error:", err.message)
    }
  }
};
module.exports = connectDB;
