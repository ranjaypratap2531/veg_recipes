const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/veg_recipes', {useNewUrlparser: true})
    .then(()=>{
        console.log('connection successfull')
    })

    .catch(()=>{
        console.log('something wrent wrong!')
    })
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))





//all router set ups
const recipeRouter = require('./routes/post')

app.use('/recipe',recipeRouter)

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})