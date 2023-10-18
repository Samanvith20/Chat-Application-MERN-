const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const app = express();

// Load environment variables from .env file
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Server Started successfully");
});
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running successful on ${PORT}`.green.bold));
