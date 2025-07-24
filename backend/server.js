// E:\MealMind-Backend\server.js
// Main server file for MealMind Backend

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const historyRoutes = require("./routes/historyRoutes");
const memberRoutes = require("./routes/memberRoutes"); // Add this line

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("MealMind Backend is running!");
});

// Use recipe routes
app.use("/api/recipes", recipeRoutes);

// Use history routes
app.use("/api/history", historyRoutes);

// Use member routes
app.use("/api/members", memberRoutes); // Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
