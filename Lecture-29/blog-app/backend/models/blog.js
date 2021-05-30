const mongooose = require('mongoose');


const blogSchema = new mongooose.Schema({
    title: {
        type:String,
    },
    img: {
        type:String,
    },
    author: {
        type:String
    },
    text: {
        type:String
    }
})


module.exports = mongooose.model('Blog', blogSchema);