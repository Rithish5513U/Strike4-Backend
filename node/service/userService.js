const User = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");  


exports.createUser = async(name,email,password)=>{
    try{
        const isFound = await User.findOne({name});
        if(isFound){
            return ({success:false,message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({name,email,password:hashedPassword});
        await user.save();
        return {success:true,message:"User created"};
    }catch(err){
        throw new Error(err.message);
    }

};

exports.verifyUser = async (name, password) => {
    try {
        const match = await User.findOne({ name });

        if (!match) {
            return { success: false, message: "User not found" };
        }

        const isMatch = await bcrypt.compare(password, match.password);
        if (!isMatch) {
            return { success: false, message: "Invalid password" };
        }

        
        const token = jwt.sign(
            { userId: match._id, name: match.name },  
            process.env.JWT_SECRET,                 
            { expiresIn: "1h" }                     
        );

        return { success: true, message: "User verified", token };
    } catch (err) {
        throw err;
    }
};