const {Task}=require("../models");

module.exports.createTask = async(req,res,next)=>{
  try{
    const{body, params:{id}} = req ;
    const createTask = await Task.create({...body,userId:id})
    // const createTask= await userInstance.createTask(body);
    res.status(201).send({data:createTask})
  }catch(error){
    next(error)
  }
}