const pool =
    require("../config/db");




// ===============================
// CREATE CONTACT MESSAGE
// PUBLIC
// ===============================


exports.createContact =
    async (req, res) => {


        try {


            const {

                name,

                email,

                phone,

                subject,

                message

            } = req.body;





            const result =
                await pool.query(

                    `

        INSERT INTO contacts

        (
        name,
        email,
        phone,
        subject,
        message
        )

        VALUES($1,$2,$3,$4,$5)

        RETURNING *

        `,


                    [

                        name,

                        email,

                        phone,

                        subject,

                        message

                    ]


                );






            res.status(201).json({


                success: true,


                message:
                    "Message sent successfully",


                contact:
                    result.rows[0]


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
// GET ALL CONTACTS ADMIN
// ===============================


exports.getContacts =
    async (req, res) => {


        try {



            const result =
                await pool.query(

                    `

        SELECT *

        FROM contacts

        ORDER BY created_at DESC

        `

                );






            res.json({


                success: true,


                contacts:
                    result.rows


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
// DELETE MESSAGE
// ===============================


exports.deleteContact =
    async (req, res) => {


        try {


            await pool.query(

                `

        DELETE FROM contacts

        WHERE id=$1

        `,

                [req.params.id]

            );





            res.json({


                success: true,


                message: "Message deleted"


            });





        }


        catch (error) {


            res.status(500).json({

                success: false,

                message: error.message

            });


        }



    };