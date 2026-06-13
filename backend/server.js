const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const morgan = require("morgan");

const path = require("path");


require("dotenv").config();



// ================================
// DATABASE CONNECTION
// ================================

require("./config/db");




// ================================
// ROUTE IMPORTS
// ================================


const authRoutes =
    require("./routes/authRoutes");


const complaintRoutes =
    require("./routes/complaintRoutes");


const blogRoutes =
    require("./routes/blogRoutes");


const galleryRoutes =
    require("./routes/galleryRoutes");


const dashboardRoutes =
    require("./routes/dashboardRoutes");


const appointmentRoutes =
    require("./routes/appointmentRoutes");


const contactRoutes =
    require("./routes/contactRoutes");





// ================================
// EXPRESS APP
// ================================


const app = express();








// ================================
// GLOBAL MIDDLEWARES
// ================================



// JSON BODY

app.use(
    express.json()
);




// FRONTEND CONNECTION

app.use(

    cors({

        origin: "*",

        credentials: true

    })

);




// SECURITY HEADERS

app.use(

    helmet({

        crossOriginResourcePolicy: false

    })

);




// LOGGER

app.use(
    morgan("dev")
);









// ================================
// STATIC UPLOAD FILES
// ================================


app.use(

    "/uploads",


    express.static(

        path.join(

            __dirname,

            "uploads"

        )

    )


);









// ================================
// HEALTH CHECK ROUTE
// ================================


app.get(

    "/",


    (req, res) => {



        res.status(200).json({



            success: true,


            message:
                "Subhash Deshmukh Digital Platform API Running"



        });



    }


);









// ================================
// API ROUTES
// ================================


// AUTH

app.use(

    "/api/auth",

    authRoutes

);




// COMPLAINTS

app.use(

    "/api/complaints",

    complaintRoutes

);




// BLOGS

app.use(

    "/api/blogs",

    blogRoutes

);




// GALLERY

app.use(

    "/api/gallery",

    galleryRoutes

);




// DASHBOARD

app.use(

    "/api/dashboard",

    dashboardRoutes

);




// APPOINTMENTS

app.use(

    "/api/appointments",

    appointmentRoutes

);


//contact 

app.use(

    "/api/contact",

    contactRoutes

);




// ================================
// UNKNOWN ROUTE
// ================================


app.use(

    (req, res) => {



        res.status(404).json({



            success: false,


            message:
                "API route not found"



        });



    }


);









// ================================
// SERVER LISTENER
// ================================


const PORT =
    process.env.PORT || 5060;




app.listen(

    PORT,


    () => {


        console.log(

            `Server running on port ${PORT}`

        );


    }


);