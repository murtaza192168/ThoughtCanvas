// using the dependencies that we installed

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/thoughtCanvas_db')
app.set('view engine', 'ejs') // So this 'view engine helps us to convert ejs_files to HTML-files

app.get('/', (req, res) =>{
    // Array object literal
    const article = [
        {
        title: 'Art_1',
        createDate: new Date(),
        desc: 'first blog'
        }, 
        {
            title: 'Art_2',
            createDate: new Date(),
            desc: 'second blog'
        }
    ]
    res.render('articles/index', {articles:article}) // Noe I am going to access the index.ejs(html_code) file into our server.js file using response.render()
})

// Now use theimported  router this way
app.use('/articles', articleRouter) //after this in article.js file, write app.get func

app.listen(3000)