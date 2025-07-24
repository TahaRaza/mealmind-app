// routes/recipeRoutes.js
// Enhanced Recipe Routes for managing recipe information

const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getRandomRecipe,
  getRecipeById,
  addRecipe,
  searchRecipesByIngredients,
  getRecipesByCuisine,
  deleteRecipe,
} = require("../controllers/recipeController");

// Get all recipes
router.get("/", getAllRecipes);

// Get random recipe
router.get("/random", getRandomRecipe);

// Search recipes by ingredients (query: ?ingredients=tomato,onion,garlic)
router.get("/search", searchRecipesByIngredients);

// Get recipes by cuisine
router.get("/cuisine/:cuisine", getRecipesByCuisine);

// Get recipe by ID
router.get("/:id", getRecipeById);

// Add a new recipe
router.post("/", addRecipe);

// Delete a recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
