// E:\MealMind-Backend\routes\historyRoutes.js
// History Routes for managing user recipe history

const express = require("express");
const router = express.Router();
const {
  addToHistory,
  getHistory,
  deleteAllHistory,
} = require("../controllers/historyController");

// Route to add a recipe to the history
router.post("/", addToHistory);

// Route to get the history
router.get("/", getHistory);

// Route to delete all history entries
router.delete("/", deleteAllHistory);

module.exports = router;
