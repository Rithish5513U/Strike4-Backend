
const userService = require("../service/userService")

exports.createUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            res.status(400).json({message:"Please provide all the details"});
        }       
        const user = await userService.createUser(name,email,password);
        res.status(201).json({message:user.message});
    }catch(err){
        
        res.status(500).json({message:err.message});
    }
}

exports.verifyUser = async(req,res)=>{
    try{
        const {name,password} = req.body;
        const user = await userService.verifyUser(name,password);
        if(!user.success){
            res.status(401).json({message:user.message});
        }
        res.status(200).json({message:user.message,token:user.token,name:user.name});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


exports.getDashboard = async(req,res)=>{
    try{
        res.status(200).json({message:"Welcome to the dashboard"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}