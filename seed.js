require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const { recipes } = require('./models/recipesAndIngredients');
const Recipe = require('./models/recipe');

// Use the MongoDB URI from .env
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/allInfoDB';

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing recipes
    await Recipe.deleteMany({});
    console.log('Cleared existing recipes');
    
    // Insert new recipes from recipesAndIngredients.js
    await Recipe.insertMany(recipes);
    console.log(`Successfully seeded ${recipes.length} recipes`);
    
    process.exit(0); // Exit successfully
  })
  .catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1); // Exit with error
  });