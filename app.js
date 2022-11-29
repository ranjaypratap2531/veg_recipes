const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/veg_recipes', {useNewUrlparser: true})
    .then(()=>{
        console.log('connection successfull')
    })

    .catch(()=>{
        console.log('something wrent wrong!')
    })





app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})