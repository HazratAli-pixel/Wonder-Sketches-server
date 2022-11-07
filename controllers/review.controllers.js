const Review = require("../modals/review.model");
const saveReview = async (req, res) => {
  try{
    const newReview = new Review({
        userId: req.body.userId,
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        serviceId: req.body.serviceId,
        reviewText: req.body.reviewText,
        rating: req.body.rating,
      });
      await newReview.save();
      res.status(201).json(newReview);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllReview = async (req, res) => {
  try{
    await Review.find()
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
      
      const decoded = req.decoded
      console.log(decoded)
      const respons = await Review.find({userId: req.params.id});
        res.status(200).json({
          message:"success",
          respons,
          decoded
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getReviewByService = async (req, res) => {
    try{
        const respons = await Review.find({serviceId: req.params.id});
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
    const respons = await Review.findOne({email: req.params.id});
      respons.userId= req.body.userId;
      respons.name= req.body.name;
      respons.imgUrl= req.body.imgUrl;
      respons.serviceId= req.body.serviceId;
      respons.reviewText= req.body.reviewText;
      respons.rating= req.body.rating;
    await respons.save()
    .then(respons =>{
      res.status(200).json({
        message:"Information updated successfully",
        respons
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
        await Review.deleteOne({email: req.params.id})
        .then(respons=>{
          res.status(200).json({
              message: "Review is deleted",
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
  getReviewByService,
};
