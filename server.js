'use strict';

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const cookie = require("cookie-parser");


const swaggerDocument = require('./swagger.json');
const supplier = require("./routes/supplier-routes");
const products = require("./routes/product-routes");
const connectDB = require("./db-connection/mongodb-connection");
const authRoutes = require("./routes/user");
const passport = require('./config/passport');
const githubAuthRoutes = require('./routes/git-auth-routes');

const app = express();
app.enable("trust proxy"); // Enable if behind a proxy (e.g., Heroku, Nginx)
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookie());

// Initialize Passport
app.use(passport.initialize());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.json({ message: "Inventory Management API" });
});

// Use the routes
app.use("/auth", authRoutes);
app.use("/suppliers", supplier);
app.use("/products", products);
app.use("/github", githubAuthRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});



async function startServer() {
  try {
    const db = await connectDB();
    if (db) {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    } else {
      console.error("Failed to connect to MongoDB");
    }
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

// Start server
startServer();