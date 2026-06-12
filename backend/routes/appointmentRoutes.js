const express = require("express");


const router = express.Router();



// middleware

const protect = require("../middleware/authMiddleware");


const authorize = require("../middleware/roleMiddleware");




// controller

const {


    createAppointment,


    getAppointments,


    updateAppointmentStatus



} = require("../controllers/appointmentController");








// =================================================
// PUBLIC ROUTES
// =================================================



// Citizen create appointment


router.post(

    "/",


    createAppointment

);









// =================================================
// ADMIN ROUTES
// =================================================



// Get all appointments


router.get(


    "/admin/all",


    protect,


    authorize(

        "super_admin",

        "admin"

    ),


    getAppointments


);








// Update appointment status


router.patch(


    "/status/:id",


    protect,


    authorize(

        "super_admin",

        "admin"

    ),


    updateAppointmentStatus


);









module.exports = router;