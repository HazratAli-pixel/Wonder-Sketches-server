const { mongoose } = require("mongoose");




// const timeStamp = timeStamp2.getTime() / 1000; // get time in second

// var t = new Date(1970, 0, 1); // seconds to datatime
//     t.setSeconds(timeStamp);

const current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));



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
    
    totalBuy:{
        type: String,
        default: "0",
    },

    createdOn:{
        type: String,
        default:timeStamp,
    }
})

module.exports = mongoose.model('Service',serviceSchema);