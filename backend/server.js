const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();


// Database connection
require("./config/db");


const app = express();


// middlewares

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));



// test route

app.get("/", (req, res) => {


    res.json({

        message: "Subhash Deshmukh Digital Platform API Running"

    });


});



const PORT = process.env.PORT || 5060;



app.listen(PORT, () => {


    console.log(
        `Server running on port ${PORT}`
    );


});