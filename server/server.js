require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth_router");
const contactRoute = require("./router/contact_router");
const serviceRoute = require("./router/service_router");
const adminRoute = require("./router/admin_router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error_middleware');

//cors policy

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions));


//middleware
app.use(express.json());

//mount the router
app.use("/api/auth", authroute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
    res.status(200).send("welcome to home");
});

app.get("/register", (req, res) => {
    res.status(200).send("welcome to registeration");
});

app.use(errorMiddleware);

const PORT = 5001;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);


        
});

});