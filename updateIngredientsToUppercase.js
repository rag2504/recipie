const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Adjust the path as needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/allInfoDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('MongoDB connected');

  try {
    const recipes = await Recipe.find();
    
    for (let recipe of recipes) {
      recipe.ingredients = recipe.ingredients.map(ing => ing.toUpperCase());
      await recipe.save();
    }

    console.log('All recipes updated to uppercase ingredients');
  } catch (error) {
    console.error('Error updating recipes:', error);
  } finally {
    mongoose.connection.close();
  }
});