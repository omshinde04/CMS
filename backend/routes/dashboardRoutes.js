const express = require("express");


const router = express.Router();



const protect = require("../middleware/authMiddleware");



const authorize = require("../middleware/roleMiddleware");



const {

    getStats,

    complaintChart


} = require("../controllers/dashboardController");





router.get(

    "/stats",


    protect,


    authorize(

        "super_admin",


        "admin"

    ),


    getStats


);






router.get(

    "/complaints-chart",


    protect,


    authorize(

        "super_admin",

        "admin"

    ),


    complaintChart


);





module.exports = router;