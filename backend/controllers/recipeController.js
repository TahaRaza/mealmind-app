// backend/controllers/recipeController.js
// Recipe Controller for managing recipes

const Recipe = require("../models/Recipe");

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error });
  }
};

// Get a random recipe
const getRandomRecipe = async (req, res) => {
  try {
    const count = await Recipe.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomRecipe = await Recipe.findOne().skip(random);

    if (!randomRecipe) {
      return res.status(404).json({ message: "No recipes found" });
    }

    res.status(200).json(randomRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching random recipe", error });
  }
};

// Get recipe by ID
const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe", error });
  }
};

// Add a new recipe
const addRecipe = async (req, res) => {
  const {
    name,
    cuisine,
    servings,
    image,
    ingredients,
    recipeSteps,
    allergies,
    cookingTime,
    difficulty,
  } = req.body;

  try {
    // Generate a unique ID
    const lastRecipe = await Recipe.findOne().sort({ id: -1 });
    const newId = lastRecipe ? lastRecipe.id + 1 : 1;

    const newRecipe = new Recipe({
      id: newId,
      name,
      cuisine,
      servings,
      image,
      ingredients,
      recipeSteps,
      allergies,
      cookingTime,
      difficulty,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error adding recipe", error });
  }
};

// Search recipes by ingredients
const searchRecipesByIngredients = async (req, res) => {
  const { ingredients } = req.query;

  if (!ingredients) {
    return res
      .status(400)
      .json({ message: "Ingredients parameter is required" });
  }

  try {
    const ingredientList = ingredients
      .split(",")
      .map((ing) => ing.trim().toLowerCase());

    const recipes = await Recipe.find({
      "ingredients.name": {
        $in: ingredientList.map((ing) => new RegExp(ing, "i")),
      },
    });

    // Score recipes based on matching ingredients
    const scoredRecipes = recipes.map((recipe) => {
      const matchingIngredients = recipe.ingredients.filter((ingredient) =>
        ingredientList.some((userIng) =>
          ingredient.name.toLowerCase().includes(userIng)
        )
      );

      return {
        ...recipe.toObject(),
        matchScore: matchingIngredients.length,
        matchingIngredients: matchingIngredients.map((ing) => ing.name),
      };
    });

    // Sort by match score (highest first)
    scoredRecipes.sort((a, b) => b.matchScore - a.matchScore);

    res.status(200).json(scoredRecipes);
  } catch (error) {
    res.status(500).json({ message: "Error searching recipes", error });
  }
};

// Get recipes by cuisine
const getRecipesByCuisine = async (req, res) => {
  const { cuisine } = req.params;

  try {
    const recipes = await Recipe.find({
      cuisine: new RegExp(cuisine, "i"),
    });

    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching recipes by cuisine", error });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error });
  }
};

module.exports = {
  getAllRecipes,
  getRandomRecipe,
  getRecipeById,
  addRecipe,
  searchRecipesByIngredients,
  getRecipesByCuisine,
  deleteRecipe,
};
