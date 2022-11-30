const express = require('express')
const Recipe = require('../models/recipe')
const router = express.Router()

router.get('/new_recipe', async(req,res)=>{
    res.render('new_recipe')
})

router.post('/create', async(req,res)=>{
   
    Recipe.create(req.body, (error, post) => {
        res.send(post)
    })
   

})

module.exports = router
