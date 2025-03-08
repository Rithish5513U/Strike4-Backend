const User = require("../model/userModel")
const bcrypt = require("bcrypt");

exports.createUser = async(name,email,password)=>{
    try{
        const isFound = await User.findOne({name});
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({name,email,password:hashedPassword});
        await user.save();
        return {success:true,message:"User created"};
    }catch(err){
        throw new Error(err.message);
    }

};
exports.verifyUser = async(name,password)=>{
    try{
        const  match = await User.findOne({name});
        if(match){
            const isMatch = await bcrypt.compare(password,match.password);
            if(isMatch){
                return {success:true,message:"User verified"};
            }else{
                return {success:false,message:"Invalid password"};
            }
        }
        else{
            return {success:false,message:"User not found"};
        }
    }catch(err){
        throw err;
    }

};