const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

const userRoutes=require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes');
const { notFound, errorHandler } = require("./middleware/errormiddleware");

// Load environment variables from .env file
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
 //to accept the json data

app.get("/", (req, res) => {
  res.send("Server Started successfully");
});
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running successful on ${PORT}`.green.bold));
