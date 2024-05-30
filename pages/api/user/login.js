import connectdb from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req,res){
  if(req.method=="POST")
    {
      connectdb();
      const {email,password} =req.body;
      if(!email ||!password)
        {
          return res.status(400).json({msg:"email and password required "});
        } 
      const emailExists=await User.findOne({email});
      if(!emailExists)
        {
            return res.status(400).json({msg:"please Register first"});

        } 
      const passwordmatched= await  bcrypt.compare(password,emailExists.password);
      if(!passwordmatched)
        {
          return res.status(400).json({msg:"password is incorrect"});
        } 
        const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        }); 
        res.status(200).json({msg:"logged in succesfully ",token})
    
        
    }
}