const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgagePath: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Curry', 'Lunch', 'Snacks', 'Rice', 'Paneer', 'Vegitables', 'Indian Sweets', 'Street Food'],
        required: 'this field is required',
    },
    content:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Recipe = mongoose.model('Recipe', RecipeSchema)
module.exports = Recipe