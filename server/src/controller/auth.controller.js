import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(password.length < 6){
      return  res.status(400).send("Password must be at least 6 characters long");
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })
    if(newUser){
      generateToken(newUser._id,res);
      await newUser.save();
      res.status(201).json({ _id: newUser._id, name: newUser.name, email: newUser.email, profilepic: newUser.profilepic, message: "User created successfully" });
    }
    else{
      res.status(400).send("Invalid user data");
    }
  } catch (error) {
  console.error("Signup error:", error.message);
  console.error(error.stack);
  res.status(500).json({
    message: "Server Error",
    error: error.message,
  });
}
}
export const login = (req, res) => {
  res.send("Login Page");
}

export const logout = (req, res) => {
  res.send("Logout Page");
}