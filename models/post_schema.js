const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({

    title : {
        type: String
    },

    author : {
        type: String
    },

    content : {
        type: String
    },

    date : {
        type: Date,
        default: Date.now()
    },

    hidden : {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model("Posts",PostSchema)

