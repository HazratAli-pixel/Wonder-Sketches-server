const { mongoose } = require("mongoose");

const serviceSchema = mongoose.Schema({
    serviceName:{
        type: String,
        require:true,
    },
    imgUrl:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    price:{
        type: String,
        default: "0",
    },
    createdOn:{
        type: Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('Service',serviceSchema);