const User = require("../modals/service.model");

const saveReview = async (req, res) => {
  try{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        refererId: req.body.refererId,
        password: req.body.password,
      });
      await newUser.save();
      res.status(201).json(newUser);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllReview = async (req, res) => {
  try{
    await User.find()
    .then(respons =>{
      res.status(200).json({
        message:"success",
        respons
      });
    })
    .catch(error =>{
      res.status(500).send(error.message);
    })
  }
  catch(error){
      res.status(500).send(error.message);
  }
};

const getReviewByUser = async (req, res) => {
    try{
        const respons = await User.findOne({email: req.params.id});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateReview = async (req, res) => {
  try {
    const respons = await User.findOne({email: req.params.id});
      respons.name= req.body.name;
      respons.email= req.body.email;
      respons.password= req.body.password;
      respons.balance = req.body.balance;
    await respons.save()
    .then(data =>{
      res.status(200).json({
        message:"success",
        data
      });
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const checkReview = async (req, res) => {
    res.status(201).json({
      message: "Check Review Get Route is working"
    })
};


const deleteReview = async (req, res) => {
    try{
        await User.deleteOne({email: req.params.id})
        .then(respons=>{
          res.status(200).json({
              message: "User is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllReview,
  getReviewByUser,
  checkReview,
  saveReview,
  updateReview,
  deleteReview,
};
