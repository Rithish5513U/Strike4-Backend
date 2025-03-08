const { use } = require("../routes/userRoute");
const userService = require("../service/userService")

exports.createUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
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
        if(user){
            res.status(200).json({message:user.message});
        }
        else{
            res.status(400).json({message:user.message});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}