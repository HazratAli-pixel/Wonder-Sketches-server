const { mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    userId:{
        type: String,
        reuire:true,
    },
    Name:{
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
        default:Date.now,
    }
})

module.exports = mongoose.model('Review',reviewSchema); //furst parameter is table aname and second parameter is schema name