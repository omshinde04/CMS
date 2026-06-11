const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();


// ================================
// DATABASE CONNECTION
// ================================

require("./config/db");



// ================================
// ROUTE IMPORTS
// ================================

const authRoutes = require("./routes/authRoutes");



// ================================
// EXPRESS APP
// ================================

const app = express();



// ================================
// GLOBAL MIDDLEWARES
// ================================

// allow json request body
app.use(express.json());


// allow frontend connection
app.use(cors());


// add security headers
app.use(helmet());


// request logger
app.use(morgan("dev"));




// ================================
// HEALTH CHECK ROUTE
// ================================

app.get("/", (req, res) => {


    res.status(200).json({

        success: true,

        message:
            "Subhash Deshmukh Digital Platform API Running"

    });


});




// ================================
// API ROUTES
// ================================

app.use(
    "/api/auth",
    authRoutes
);




// ================================
// HANDLE UNKNOWN ROUTES
// ================================

app.use((req, res) => {


    res.status(404).json({

        success: false,

        message: "API route not found"

    });


});





// ================================
// SERVER LISTENER
// ================================

const PORT = process.env.PORT || 5060;


app.listen(PORT, () => {


    console.log(
        `Server running on port ${PORT}`
    );


});