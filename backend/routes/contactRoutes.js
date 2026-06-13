const express = require("express");


const router = express.Router();



const protect =
    require("../middleware/authMiddleware");


const authorize =
    require("../middleware/roleMiddleware");



const {


    createContact,


    getContacts,


    deleteContact


} = require("../controllers/contactController");








// =====================
// PUBLIC SEND MESSAGE
// =====================


router.post(

    "/",

    createContact

);










// =====================
// ADMIN GET MESSAGES
// =====================


router.get(

    "/",


    protect,


    authorize(

        "super_admin",

        "admin",

        "content_manager"

    ),


    getContacts


);









// =====================
// DELETE MESSAGE
// =====================


router.delete(

    "/:id",


    protect,


    authorize(

        "super_admin",

        "admin",

        "content_manager"

    ),


    deleteContact


);








module.exports = router;