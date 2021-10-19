const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config");

// routes
const userRoutes = require("./api/users/user.router");

const { MONGODB_URL } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan("dev"));

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGODB_URL}`;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/users", userRoutes);
// app.use("/api/notes", );

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
