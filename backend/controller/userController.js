const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const registeruser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  // Query for MongoDB
  const userExists = await User.findOne({ email }); // Use "User" instead of "user" for the model

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
const authUser=asyncHandler(async(req,res)=>{
  const{email,password} =req.body
  const user = await User.findOne({ email });
  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });

  }else{
    res.status(401)
    throw new Error("Invalid email or password")
  }

})

module.exports = {
  registeruser,authUser
};

