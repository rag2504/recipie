const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/select', async (req, res) => {
  const { selectedIngredients } = req.body;

  if (!Array.isArray(selectedIngredients) || selectedIngredients.length < 3) {
    return res.status(400).json({ message: "Please select at least 3 ingredients." });
  }

  try {
    const selectedIngredientsUpper = selectedIngredients.map(ing => ing.toUpperCase());

    // Corrected query to find recipes where all ingredients are in the selected list
    const matchingRecipes = await Recipe.aggregate([
      {
        $match: {
          $expr: {
            $setIsSubset: ["$ingredients", selectedIngredientsUpper]
          }
        }
      }
    ]);

    if (matchingRecipes.length === 0) {
      return res.status(404).json({ message: "No recipes found with the selected ingredients." });
    }

    res.status(200).json({ recipes: matchingRecipes });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error fetching recipes", error: error.message });
  }
});

module.exports = router;
