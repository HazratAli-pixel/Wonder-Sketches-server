const { ObjectId } = require("mongodb");
const path = require("path")
const { v4: uuidv4 } = require("uuid");
const Service = require("../modals/service.model");

const saveService = async (req, res) => {
  try{
    const newService = new Service({
      serviceName:req.body.sname,
      imgUrl:req.body.imgUrl,
      description:req.body.description
      });
      await newService.save();
      res.status(201).json(newService);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};



const getAllService = async (req, res) => {
    try{
        const respons = await Service.find();
        if(respons.length==0){
          res.status(200).json({
            message:"No Data Found",
          })
        }
        res.status(201).json(respons);
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getSingleService = async (req, res) => {
    try{
        await Service.findOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
            message:"success",
            respons
          });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateService = async (req, res) => {
  try {
    const updateService = await Service.findOne({_id: ObjectId(req.params.id)});
      updateService.imgUrl= req.body.imgUrl;
      updateService.description= req.body.description;
      updateService.category= req.body.category;
    await updateService.save();
    res.status(201).json(updateService);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const checkService = async (req, res) => {
    res.status(200).json({
      message: "Check Service Get Route is working"
    })
};


const deleteService = async (req, res) => {
    try{
       const delService = await Tips.deleteOne({_id: ObjectId(req.params.id)});
        res.status(200).json({
            message: "Service is deleted",
            delService
          });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllService,
  getSingleService,
  deleteService,
  updateService,
  saveService,
  checkService
};
