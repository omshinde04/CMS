const express = require("express");


const router = express.Router();



const upload =
    require("../middleware/uploadMiddleware");


const protect =
    require("../middleware/authMiddleware");


const authorize =
    require("../middleware/roleMiddleware");







const {


    createComplaint,


    trackComplaint,


    getComplaints,


    updateStatus,


    deleteComplaint


} = require("../controllers/complaintController");









// ================================
// CITIZEN CREATE COMPLAINT
// ================================


router.post(

    "/",


    upload.array(
        "images",
        5
    ),


    createComplaint


);










// ================================
// CITIZEN TRACK COMPLAINT
// ================================


router.get(

    "/track/:id",


    trackComplaint


);










// ================================
// ADMIN GET ALL
// ================================


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









// ================================
// ADMIN UPDATE STATUS
// ================================


router.patch(

    "/status/:id",


    protect,


    authorize(

        "super_admin",

        "admin",

        "complaint_manager"

    ),


    updateStatus


);









// ================================
// ADMIN DELETE COMPLAINT
// ================================


router.delete(

    "/:id",


    protect,


    authorize(

        "super_admin",

        "admin",

        "complaint_manager"

    ),


    deleteComplaint


);








module.exports = router;