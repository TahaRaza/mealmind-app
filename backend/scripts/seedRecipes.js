// scripts/seedRecipes.js
// Script to populate the database with sample recipes

const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
require("dotenv").config();

const sampleRecipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    servings: 4,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400",
    ingredients: [
      { name: "spaghetti", quantity: "400g" },
      { name: "eggs", quantity: "4 large" },
      { name: "parmesan cheese", quantity: "100g grated" },
      { name: "pancetta", quantity: "150g diced" },
      { name: "black pepper", quantity: "to taste" },
      { name: "salt", quantity: "to taste" },
    ],
    recipeSteps: [
      {
        step: 1,
        title: "Cook the pasta",
        details: [
          "Bring a large pot of salted water to boil",
          "Add spaghetti and cook according to package directions",
          "Reserve 1 cup pasta water before draining",
        ],
      },
      {
        step: 2,
        title: "Prepare the sauce",
        details: [
          "Whisk eggs and grated parmesan in a bowl",
          "Add freshly ground black pepper",
          "Set aside",
        ],
      },
      {
        step: 3,
        title: "Cook pancetta",
        details: [
          "Heat a large skillet over medium heat",
          "Add pancetta and cook until crispy",
          "Remove from heat",
        ],
      },
      {
        step: 4,
        title: "Combine everything",
        details: [
          "Add hot pasta to the skillet with pancetta",
          "Quickly add egg mixture while tossing",
          "Add pasta water gradually until creamy",
          "Serve immediately",
        ],
      },
    ],
    allergies: ["eggs", "dairy"],
    cookingTime: "20 minutes",
    difficulty: "Medium",
  },
  {
    id: 2,
    name: "Chicken Stir Fry",
    cuisine: "Asian",
    servings: 3,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    ingredients: [
      { name: "chicken breast", quantity: "500g sliced" },
      { name: "bell peppers", quantity: "2 mixed colors" },
      { name: "broccoli", quantity: "1 head chopped" },
      { name: "soy sauce", quantity: "3 tbsp" },
      { name: "garlic", quantity: "3 cloves minced" },
      { name: "ginger", quantity: "1 inch piece grated" },
      { name: "vegetable oil", quantity: "2 tbsp" },
      { name: "sesame oil", quantity: "1 tsp" },
    ],
    recipeSteps: [
      {
        step: 1,
        title: "Prepare ingredients",
        details: [
          "Slice chicken into thin strips",
          "Chop all vegetables",
          "Mince garlic and grate ginger",
        ],
      },
      {
        step: 2,
        title: "Cook chicken",
        details: [
          "Heat oil in a wok over high heat",
          "Add chicken and cook until golden",
          "Remove and set aside",
        ],
      },
      {
        step: 3,
        title: "Stir fry vegetables",
        details: [
          "Add more oil if needed",
          "Stir fry garlic and ginger for 30 seconds",
          "Add vegetables and cook for 3-4 minutes",
        ],
      },
      {
        step: 4,
        title: "Finish the dish",
        details: [
          "Return chicken to wok",
          "Add soy sauce and sesame oil",
          "Toss everything together",
          "Serve over rice",
        ],
      },
    ],
    allergies: ["soy"],
    cookingTime: "15 minutes",
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Vegetable Curry",
    cuisine: "Indian",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    ingredients: [
      { name: "mixed vegetables", quantity: "500g (potatoes, carrots, peas)" },
      { name: "coconut milk", quantity: "400ml can" },
      { name: "onion", quantity: "1 large diced" },
      { name: "tomatoes", quantity: "2 diced" },
      { name: "curry powder", quantity: "2 tbsp" },
      { name: "turmeric", quantity: "1 tsp" },
      { name: "garlic", quantity: "4 cloves minced" },
      { name: "ginger", quantity: "1 inch piece grated" },
      { name: "vegetable oil", quantity: "2 tbsp" },
    ],
    recipeSteps: [
      {
        step: 1,
        title: "Prepare vegetables",
        details: [
          "Dice potatoes and carrots",
          "Chop onions and tomatoes",
          "Mince garlic and grate ginger",
        ],
      },
      {
        step: 2,
        title: "Build the base",
        details: [
          "Heat oil in a large pot",
          "Sauté onions until golden",
          "Add garlic and ginger, cook 1 minute",
        ],
      },
      {
        step: 3,
        title: "Add spices and vegetables",
        details: [
          "Add curry powder and turmeric",
          "Add tomatoes and cook until soft",
          "Add vegetables and coconut milk",
        ],
      },
      {
        step: 4,
        title: "Simmer and serve",
        details: [
          "Bring to boil then reduce heat",
          "Simmer 20-25 minutes until vegetables are tender",
          "Season with salt",
          "Serve with rice or naan",
        ],
      },
    ],
    allergies: [],
    cookingTime: "35 minutes",
    difficulty: "Easy",
  },
  {
    id: 4,
    name: "Caesar Salad",
    cuisine: "American",
    servings: 4,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400",
    ingredients: [
      { name: "romaine lettuce", quantity: "2 heads chopped" },
      { name: "parmesan cheese", quantity: "50g grated" },
      { name: "croutons", quantity: "1 cup" },
      { name: "mayonnaise", quantity: "1/2 cup" },
      { name: "lemon juice", quantity: "2 tbsp" },
      { name: "worcestershire sauce", quantity: "1 tsp" },
      { name: "garlic", quantity: "2 cloves minced" },
      { name: "anchovies", quantity: "2 fillets minced (optional)" },
    ],
    recipeSteps: [
      {
        step: 1,
        title: "Prepare lettuce",
        details: [
          "Wash and chop romaine lettuce",
          "Dry thoroughly",
          "Chill in refrigerator",
        ],
      },
      {
        step: 2,
        title: "Make dressing",
        details: [
          "Combine mayonnaise, lemon juice, and Worcestershire",
          "Add minced garlic and anchovies if using",
          "Whisk until smooth",
        ],
      },
      {
        step: 3,
        title: "Assemble salad",
        details: [
          "Place lettuce in large bowl",
          "Add dressing and toss well",
          "Top with parmesan and croutons",
          "Serve immediately",
        ],
      },
    ],
    allergies: ["eggs", "dairy", "fish"],
    cookingTime: "10 minutes",
    difficulty: "Easy",
  },
  {
    id: 5,
    name: "Beef Tacos",
    cuisine: "Mexican",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    ingredients: [
      { name: "ground beef", quantity: "500g" },
      { name: "taco shells", quantity: "8 hard or soft" },
      { name: "onion", quantity: "1 diced" },
      { name: "tomatoes", quantity: "2 diced" },
      { name: "lettuce", quantity: "1 head shredded" },
      { name: "cheddar cheese", quantity: "100g grated" },
      { name: "taco seasoning", quantity: "1 packet" },
      { name: "sour cream", quantity: "for serving" },
      { name: "salsa", quantity: "for serving" },
    ],
    recipeSteps: [
      {
        step: 1,
        title: "Cook the beef",
        details: [
          "Brown ground beef in a large skillet",
          "Drain excess fat",
          "Add diced onion and cook until soft",
        ],
      },
      {
        step: 2,
        title: "Season the meat",
        details: [
          "Add taco seasoning and water as per packet directions",
          "Simmer until thickened",
          "Remove from heat",
        ],
      },
      {
        step: 3,
        title: "Prepare toppings",
        details: [
          "Dice tomatoes",
          "Shred lettuce",
          "Grate cheese",
          "Warm taco shells",
        ],
      },
      {
        step: 4,
        title: "Assemble tacos",
        details: [
          "Fill shells with seasoned beef",
          "Top with lettuce, tomatoes, and cheese",
          "Serve with sour cream and salsa",
        ],
      },
    ],
    allergies: ["dairy"],
    cookingTime: "20 minutes",
    difficulty: "Easy",
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

const seedRecipes = async () => {
  try {
    await connectDB();

    // Check existing recipes
    const existingCount = await Recipe.countDocuments();

    if (existingCount > 0) {
      console.log(`Found ${existingCount} existing recipes in database.`);
      console.log("Skipping seeding to preserve your existing data.");
      console.log(
        "If you want to add sample recipes, delete existing ones first or modify this script."
      );

      // Show some existing recipes
      const sampleExisting = await Recipe.find().limit(5);
      console.log("\nExisting recipes (sample):");
      sampleExisting.forEach((recipe) => {
        console.log(`- ${recipe.name} (${recipe.cuisine})`);
      });

      process.exit(0);
    }

    // Only insert if no existing recipes
    await Recipe.insertMany(sampleRecipes);
    console.log("Sample recipes inserted successfully!");

    console.log(`Inserted ${sampleRecipes.length} recipes:`);
    sampleRecipes.forEach((recipe) => {
      console.log(`- ${recipe.name} (${recipe.cuisine})`);
    });

    process.exit(0);
  } catch (error) {
    console.error("Error seeding recipes:", error);
    process.exit(1);
  }
};

seedRecipes();
