// E:\MealMind-Backend\models\Recipe.js
// Recipe Model for storing recipe information

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  cuisine: String, // Corrected spelling
  servings: Number,
  image: String,
  ingredients: [
    {
      name: String,
      quantity: String,
    },
  ],
  recipeSteps: [
    // Corrected typo
    {
      step: Number,
      title: String,
      details: [String],
    },
  ],
  allergies: [String],
  cookingTime: String,
  difficulty: String,
});

module.exports = mongoose.model("Recipe", recipeSchema); // Corrected typo
