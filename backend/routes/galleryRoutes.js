const express = require("express");

const router = express.Router();



const upload = require("../middleware/uploadMiddleware");


const protect = require("../middleware/authMiddleware");


const authorize = require("../middleware/roleMiddleware");



const {


    addGallery,


    getGallery,


    deleteGallery


} = require("../controllers/galleryController");




// PUBLIC


router.get(

    "/",

    getGallery

);





// ADMIN UPLOAD


router.post(

    "/",

    protect,

    authorize(

        "super_admin",

        "admin",

        "content_manager"

    ),


    upload.single("image"),


    addGallery


);




// DELETE


router.delete(

    "/:id",


    protect,


    authorize(

        "super_admin",

        "content_manager"

    ),


    deleteGallery


);





module.exports = router;