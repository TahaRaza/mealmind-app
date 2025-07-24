// E:\MealMind-Backend\controllers\historyController.js
// History Controller for managing user recipe history

const History = require("../models/History");

// Add a recipe to the history or update if it already exists
const addToHistory = async (req, res) => {
  const { recipeId } = req.body; // Ensure recipeId is correctly destructured

  if (!recipeId) {
    return res.status(400).json({ message: "Recipe ID is required" });
  }

  try {
    const existingEntry = await History.findOne({ recipe: recipeId });
    if (existingEntry) {
      // Update the existing entry with the latest timestamp
      existingEntry.timestamp = new Date();
      await existingEntry.save();
      res.status(200).json(existingEntry);
    } else {
      // Create a new entry
      const newHistoryEntry = new History({
        recipe: recipeId,
      });

      await newHistoryEntry.save();
      res.status(201).json(newHistoryEntry);
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding to history", error });
  }
};

// Get the history
const getHistory = async (req, res) => {
  try {
    const history = await History.find()
      .populate("recipe")
      .sort({ timestamp: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history", error });
  }
};

// Delete all history entries
const deleteAllHistory = async (req, res) => {
  try {
    await History.deleteMany({});
    res
      .status(200)
      .json({ message: "All history entries deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting history", error });
  }
};

module.exports = { addToHistory, getHistory, deleteAllHistory };
