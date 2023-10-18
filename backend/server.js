const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

const userRoutes=require('./routes/userRoutes')

// Load environment variables from .env file
dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Server Started successfully");
});
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running successful on ${PORT}`.green.bold));
