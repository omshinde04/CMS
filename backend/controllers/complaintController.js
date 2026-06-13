const pool = require("../config/db");



// ======================================
// CREATE COMPLAINT
// ======================================


exports.createComplaint = async (req, res) => {


    try {


        const {

            citizen_name,

            phone,

            email,

            category,

            title,

            description

        } = req.body;





        const complaintCode =
            "COMP-" + Date.now();







        const complaint =
            await pool.query(

                `

                INSERT INTO complaints

                (
                    complaint_code,
                    citizen_name,
                    phone,
                    email,
                    category,
                    title,
                    description
                )

                VALUES($1,$2,$3,$4,$5,$6,$7)

                RETURNING *

                `,


                [

                    complaintCode,

                    citizen_name,

                    phone,

                    email,

                    category,

                    title,

                    description

                ]

            );










        // SAVE IMAGES


        if (req.files) {


            for (let file of req.files) {


                await pool.query(

                    `

                    INSERT INTO complaint_images

                    (
                        complaint_id,
                        image
                    )

                    VALUES($1,$2)

                    `,


                    [

                        complaint.rows[0].id,

                        file.filename

                    ]

                );


            }


        }










        res.status(201).json({


            success: true,


            message:
                "Complaint submitted successfully",


            trackingId:
                complaintCode


        });







    }


    catch (error) {



        res.status(500).json({


            success: false,


            message: error.message


        });



    }



};












// ======================================
// TRACK COMPLAINT
// ======================================


exports.trackComplaint = async (req, res) => {


    try {


        const result =
            await pool.query(

                `

                SELECT *

                FROM complaints

                WHERE complaint_code=$1

                `,


                [
                    req.params.id
                ]

            );







        if (result.rows.length === 0) {


            return res.status(404).json({


                success: false,


                message: "Complaint not found"


            });


        }







        res.json({


            success: true,


            complaint:
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












// ======================================
// ADMIN GET ALL COMPLAINTS
// ======================================


// ======================================
// ADMIN GET ALL COMPLAINTS WITH IMAGES
// ======================================


exports.getComplaints = async (req, res) => {


    try {


        const complaints =
            await pool.query(

                `

                SELECT

                c.*,

                COALESCE(

                    json_agg(
                        ci.image
                    )

                    FILTER(
                        WHERE ci.image IS NOT NULL
                    ),

                    '[]'

                ) AS images


                FROM complaints c


                LEFT JOIN complaint_images ci

                ON c.id = ci.complaint_id



                GROUP BY c.id


                ORDER BY c.created_at DESC


                `

            );






        res.json({

            success: true,

            complaints: complaints.rows

        });





    }


    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};







// ======================================
// ADMIN UPDATE STATUS
// ======================================


exports.updateStatus = async (req, res) => {


    try {


        const {

            status,

            remark

        } = req.body;



        const id =
            req.params.id;







        const oldComplaint =
            await pool.query(

                "SELECT * FROM complaints WHERE id=$1",

                [id]

            );







        if (oldComplaint.rows.length === 0) {


            return res.status(404).json({


                success: false,


                message: "Complaint not found"


            });


        }









        await pool.query(

            `

            UPDATE complaints

            SET status=$1

            WHERE id=$2

            `,


            [

                status,

                id

            ]

        );









        await pool.query(

            `

            INSERT INTO complaint_history

            (
                complaint_id,
                old_status,
                new_status,
                remark,
                updated_by
            )


            VALUES($1,$2,$3,$4,$5)

            `,


            [

                id,

                oldComplaint.rows[0].status,

                status,

                remark,

                req.user.id

            ]


        );










        res.json({


            success: true,


            message: "Status updated"


        });





    }


    catch (error) {



        res.status(500).json({


            success: false,


            message: error.message


        });


    }



};











// ======================================
// ADMIN DELETE COMPLAINT
// ======================================


exports.deleteComplaint = async (req, res) => {


    try {


        const id =
            req.params.id;






        const complaint =
            await pool.query(

                "SELECT * FROM complaints WHERE id=$1",

                [id]

            );







        if (complaint.rows.length === 0) {


            return res.status(404).json({


                success: false,


                message: "Complaint not found"


            });


        }









        await pool.query(

            "DELETE FROM complaints WHERE id=$1",

            [id]

        );










        res.json({


            success: true,


            message:
                "Complaint deleted successfully"


        });





    }


    catch (error) {



        res.status(500).json({


            success: false,


            message: error.message


        });


    }



};