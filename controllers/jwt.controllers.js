const jwt = require('jsonwebtoken');


const createTokken = async (req, res) => {
  try{
    const email = req.body;
    const token = jwt.sign(email,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
    res.status(200).json({
      message: "Check Service Get Route is working",
      token
    })
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};



const saveService = async (req, res) => {
    res.status(200).json({
      message: "Check Service Get Route is working"
    })
};




module.exports = {
  createTokken
};
