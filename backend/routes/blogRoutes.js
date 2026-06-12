const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");

const authorize = require("../middleware/roleMiddleware");

const upload = require("../middleware/uploadMiddleware");



const {

    createBlog,

    getBlogs,

    deleteBlog


} = require("../controllers/blogController");



// PUBLIC

router.get(
    "/",
    getBlogs
);



// ADMIN CREATE


router.post(
    "/",

    protect,

    authorize(
        "super_admin",
        "admin",
        "content_manager"
    ),

    upload.single("image"),

    createBlog

);




// DELETE


router.delete(
    "/:id",

    protect,

    authorize(
        "super_admin",
        "content_manager"
    ),

    deleteBlog

);



module.exports = router;