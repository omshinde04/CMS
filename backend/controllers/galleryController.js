const pool = require("../config/db");



// CREATE GALLERY IMAGE


exports.addGallery = async (req, res) => {


    try {


        const {

            title,

            category

        } = req.body;



        const image = req.file
            ?
            req.file.filename
            :
            null;




        const result = await pool.query(

            `

INSERT INTO gallery

(title,image,category)

VALUES($1,$2,$3)

RETURNING *

`,

            [

                title,

                image,

                category

            ]

        );




        res.status(201).json({

            success: true,

            message: "Gallery image uploaded",

            gallery: result.rows[0]

        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};




// GET GALLERY PUBLIC



exports.getGallery = async (req, res) => {


    try {


        const result =

            await pool.query(

                `

SELECT *

FROM gallery

ORDER BY created_at DESC

`

            );



        res.json({

            success: true,

            gallery: result.rows

        });



    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};




// DELETE IMAGE



exports.deleteGallery = async (req, res) => {


    try {


        await pool.query(

            `

DELETE FROM gallery

WHERE id=$1

`,

            [req.params.id]

        );



        res.json({

            success: true,

            message: "Gallery item deleted"


        });



    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};