const express = require("express");


const router = express.Router();




const protect =
    require("../middleware/authMiddleware");


const authorize =
    require("../middleware/roleMiddleware");


const upload =
    require("../middleware/uploadMiddleware");








const {

    createBlog,

    getBlogs,

    getBlogBySlug,

    updateBlog,

    deleteBlog


} = require("../controllers/blogController");










// ===============================
// PUBLIC ROUTES
// ===============================


// ALL BLOGS

router.get(

    "/",

    getBlogs

);




// SINGLE BLOG

router.get(

    "/slug/:slug",

    getBlogBySlug

);











// ===============================
// ADMIN ROUTES
// ===============================



// CREATE


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









// UPDATE


router.patch(

    "/:id",


    protect,


    authorize(

        "super_admin",

        "admin",

        "content_manager"

    ),


    upload.single("image"),


    updateBlog


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