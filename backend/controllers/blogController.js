const pool = require("../config/db");


// CREATE BLOG


exports.createBlog = async (req, res) => {


    try {


        const {

            title,

            slug,

            content

        } = req.body;



        const image = req.file
            ?
            req.file.filename
            :
            null;



        const blog =

            await pool.query(

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




// GET ALL BLOGS PUBLIC


exports.getBlogs = async (req, res) => {


    try {


        const blogs =

            await pool.query(

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

            message: error.message

        });

    }


};




// DELETE BLOG



exports.deleteBlog = async (req, res) => {


    try {


        await pool.query(

            "DELETE FROM blogs WHERE id=$1",

            [req.params.id]

        );



        res.json({

            success: true,

            message: "Blog deleted"

        });


    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }



};


