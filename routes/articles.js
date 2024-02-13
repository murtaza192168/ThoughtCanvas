// This coding will help in navigating (routing)

const express = require('express')

//using the router for navigating on website via button clicks
const router = express.Router() 

const Article = require('./../models/articles')

//Now export this router using module.exports.. So that we can use anywhere in this project
module.exports = router 
// Now in the main server.js file import this router and provide path for this file

// For GET request
router.get('/new', (req, res) =>{
    res.render('articles/new') // here I will write router.send(...), bcz, first thing is that I want to send a response and dont want to render it. second thing I will pass router.get() bcz here app has not been created.. here router plays a role
   
})

// For POST request
router.post('/', (req, res) => {
   // we will code this once form_field is ready
}) // I will be using this post method to post my data into the mongodb database.. lets go to mongodb compass and get started with the setup
