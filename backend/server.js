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
const complaintRoutes =
    require("./routes/complaintRoutes");
const blogRoutes = require("./routes/blogRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const dashboardRoutes =
    require("./routes/dashboardRoutes");


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
//complaints 
app.use(
    "/api/complaints",
    complaintRoutes
);
//blogRoutes
app.use(
    "/api/blogs",
    blogRoutes
);
//Gallery Routes
app.use(
    "/api/gallery",
    galleryRoutes
);


//dashboard route
app.use(
    "/api/dashboard",
    dashboardRoutes
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