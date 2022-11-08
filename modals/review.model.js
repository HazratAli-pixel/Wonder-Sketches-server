const { mongoose } = require("mongoose");

var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));


const reviewSchema = mongoose.Schema({
    userId:{
        type: String,
        reuire:true,
    },
    name:{
        type: String,
        reuire:true,
    },
    imgUrl:{
        type: String,
        reuire:true,
    },
    serviceId:{
        type: String,
        require:true,
    },
    reviewText:{
        type: String,
        require:true,
    },
    rating:{
        type: String,
        require:true,
    },
    createdOn:{
        type: Date,
        default:timeStamp,
    }
})

module.exports = mongoose.model('Review',reviewSchema); //furst parameter is table aname and second parameter is schema name