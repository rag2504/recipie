// routes/ingredientRoutes.js
const express = require('express');
const router = express.Router();
const { ingredients, recipes } = require('../models/recipesAndIngredients');

// Route to get the predefined list of ingredients
router.get('/available', (req, res) => {
  res.json({ ingredients });
});

// Route to select 3 or more ingredients
router.post('/select', (req, res) => {
  const { selectedIngredients } = req.body;

  // Validate that all selected ingredients exist in the predefined list
  const invalidIngredients = selectedIngredients.filter(ing => !ingredients.includes(ing.toUpperCase()));

  if (invalidIngredients.length > 0) {
    return res.status(400).json({ message: `Invalid ingredients selected: ${invalidIngredients.join(", ")}` });
  }

  // Suggest recipes based on selected ingredients
  const matchingRecipes = recipes.filter(recipe =>
    recipe.ingredients.every(ingredient => selectedIngredients.map(ing => ing.toUpperCase()).includes(ingredient))
  );

  if (matchingRecipes.length === 0) {
    return res.status(404).json({ message: "No recipes found with the selected ingredients." });
  }

  res.status(200).json({ recipes: matchingRecipes });
});

module.exports = router;