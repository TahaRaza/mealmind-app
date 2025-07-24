// E:\MealMind-Backend\controllers\recipeController.js
// Recipe Controller for managing recipes

const Recipe = require("../models/Recipe");

// GET all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error });
  }
};

// GET a random recipe
const getRandomRecipe = async (req, res) => {
  try {
    const count = await Recipe.countDocuments(); // Corrected typo
    const randomIndex = Math.floor(Math.random() * count);
    const randomRecipe = await Recipe.findOne().skip(randomIndex);
    res.status(200).json(randomRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching random recipe", error });
  }
};

module.exports = { getAllRecipes, getRandomRecipe };
