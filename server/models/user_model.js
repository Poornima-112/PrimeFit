const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,       
    },

    email: {
        type: String,
        required: true,       
    },

    phone: {
        type: String,
        required: true,       
    },

    password: {
        type: String,
        required: true,       
    },

    isAdmin: {
        type: Boolean,
        default: false,
    }

});

// Secure password using bcrypt
userSchema.pre('save', async function(next) { // Add `next` as a parameter here
    console.log("pre method", this);
    const user = this;

    if (!user.isModified('password')) {
        return next(); // If the password is not modified, move to the next middleware
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
        next(); // Proceed to the next middleware or save the user
    } catch (error) {
        next(error); // Pass errors to the next middleware or handler
    }
});

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
};

//JSON web token(JWT) issues by server but stored in client side -> cookies, local storage
userSchema.methods.generateToken = async function() {
    
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SEC_KEY,
        {
            expiresIn: "30d",
        }
    );

    }catch(error){
        console.log(error);
    }

};


const User = mongoose.model("User", userSchema);
module.exports = User;
