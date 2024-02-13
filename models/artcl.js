const mongoose = require('mongoose')

// Create article structure
const artcl_sructure = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now()
    },
    description: {
        type: String
    },
    markdown:{
        type:String,
        required: true
    }

})

// exporting this mongoose data into...
module.exports = mongoose.model('Article', artcl_sructure); // in order to import and use this mongoose data in routing (in articles.js) we need to first export their
