const express = require("express");

const router = express.Router();


const upload = require("../middleware/uploadMiddleware");

const protect = require("../middleware/authMiddleware");

const authorize = require("../middleware/roleMiddleware");



const {


    createComplaint,

    trackComplaint,

    getComplaints,

    updateStatus


} = require("../controllers/complaintController");




// citizen


router.post(

    "/",

    upload.array("images", 5),

    createComplaint

);



router.get(

    "/track/:id",

    trackComplaint

);




// admin


router.get(

    "/admin/all",

    protect,

    authorize(
        "super_admin",
        "admin",
        "complaint_manager"
    ),

    getComplaints

);





router.patch(

    "/status/:id",

    protect,

    authorize(
        "super_admin",
        "complaint_manager"
    ),

    updateStatus

);




module.exports = router;