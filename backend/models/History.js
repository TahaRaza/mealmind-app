// E:\MealMind-Backend\models\History.js
// History Model for storing user recipe history

const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("History", historySchema);
