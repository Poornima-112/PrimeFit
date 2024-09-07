const User = require("../models/user_model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send("Welcome using cont");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// ****************************** REGISTER ****************************

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ 
            msg: "Registeration successfull", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.log(req.body);
        next(error);
    }
};


// ****************************** LOGIN ****************************

const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({ 
                msg: "Login successfull", 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),

        });
    }
    else{
        res.status(401).json({message:"invalid credentials"});
    }
    }catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
};

//to send user data
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`Error from the user route: ${error}`);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { home, register, login, user };



