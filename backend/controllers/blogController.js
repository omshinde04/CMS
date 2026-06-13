const pool = require("../config/db");




// ===============================
// CREATE BLOG
// ===============================

exports.createBlog = async (req, res) => {

    try {

        const {
            title,
            slug,
            content
        } = req.body;


        const image = req.file
            ? req.file.filename
            : null;



        const result = await pool.query(

            `
            INSERT INTO blogs
            (title,slug,content,image,created_by)

            VALUES($1,$2,$3,$4,$5)

            RETURNING *
            `,

            [
                title,
                slug,
                content,
                image,
                req.user.id
            ]

        );



        res.status(201).json({

            success: true,

            message: "Blog created",

            blog: result.rows[0]

        });



    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};









// ===============================
// GET ALL BLOGS
// PUBLIC
// ===============================


exports.getBlogs = async (req, res) => {


    try {


        const blogs = await pool.query(

            `
            SELECT *
            FROM blogs
            ORDER BY created_at DESC
            `

        );



        res.json({

            success: true,

            blogs: blogs.rows

        });


    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









// ===============================
// GET BLOG BY SLUG
// PUBLIC
// ===============================


exports.getBlogBySlug = async (req, res) => {


    try {


        const { slug } = req.params;



        const blog = await pool.query(

            `
            SELECT *
            FROM blogs
            WHERE slug=$1
            `,

            [slug]

        );





        if (blog.rows.length === 0) {


            return res.status(404).json({

                success: false,

                message: "Blog not found"

            });

        }






        res.json({

            success: true,

            blog: blog.rows[0]

        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









// ===============================
// UPDATE BLOG
// ===============================


exports.updateBlog = async (req, res) => {


    try {


        const {

            title,

            slug,

            content


        } = req.body;




        const { id } = req.params;





        const oldBlog = await pool.query(

            `
            SELECT *
            FROM blogs
            WHERE id=$1
            `,

            [id]

        );






        if (oldBlog.rows.length === 0) {


            return res.status(404).json({

                success: false,

                message: "Blog not found"

            });

        }






        const image = req.file

            ? req.file.filename

            : oldBlog.rows[0].image;








        const updated = await pool.query(

            `
            UPDATE blogs

            SET

            title=$1,

            slug=$2,

            content=$3,

            image=$4


            WHERE id=$5


            RETURNING *
            `,

            [

                title,

                slug,

                content,

                image,

                id

            ]


        );







        res.json({

            success: true,

            message: "Blog updated",

            blog: updated.rows[0]

        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};










// ===============================
// DELETE BLOG
// ===============================


exports.deleteBlog = async (req, res) => {


    try {


        await pool.query(

            `
            DELETE FROM blogs
            WHERE id=$1
            `,

            [req.params.id]

        );




        res.json({

            success: true,

            message: "Blog deleted"

        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};