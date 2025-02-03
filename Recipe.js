const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  preparationTime: String,
  cookingTime: String,
  dishType: String,
  cuisine: String,
  steps: [String],
  imageUrl: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
