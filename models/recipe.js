const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName:{
        type:String,
        required:true
    },
    author: String,
    description: String,
    duration: {
        time: Number,
        unit: {
            type: String,
            enum:['min', 'hr']
        }
    },
    ingredients:[{
        name: String, 
        quantity: Number,
        quantityUnit: String
    }],
    instructions: [String],
    servings: Number,
    cateogory: [String]
});

const Recipe = mongoose.model('Recipe', recipeSchema );

module.exports = Recipe;
