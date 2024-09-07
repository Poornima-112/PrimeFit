const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/GymAdmin"
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;

const connectDb = async() => {
    try{
        await mongoose.connect(URI);
        console.log("connection successfull to DB")

    }catch(error){
        console.log("database failed to connect");
        process.exit(0);
    }
};

module.exports = connectDb;
