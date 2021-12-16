const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/first-node-js"
const connectToDb = () =>{
    mongoose.connect(URI, ()=>{
        console.log("Connected to Mongodb");
    })
}

module.exports = connectToDb