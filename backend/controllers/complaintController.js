const pool = require("../config/db");



// CREATE COMPLAINT


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

VALUES

($1,$2,$3,$4,$5,$6,$7)


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





        // save images


        if (req.files) {


            for (let file of req.files) {



                await pool.query(

                    `

INSERT INTO complaint_images

(complaint_id,image)

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


            message: "Complaint submitted successfully",


            trackingId: complaintCode


        });





    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};


//Tracking function 
exports.trackComplaint = async (req, res) => {


    try {


        const result =

            await pool.query(

                `

SELECT *

FROM complaints

WHERE complaint_code=$1

`,

                [req.params.id]

            );



        if (result.rows.length === 0) {


            return res.status(404).json({

                message: "Complaint not found"

            });


        }




        res.json({

            success: true,

            complaint: result.rows[0]

        });




    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};


//Admin Get All Complaints

exports.getComplaints = async (req, res) => {


    try {


        const complaints =

            await pool.query(

                `

SELECT *

FROM complaints

ORDER BY created_at DESC

`

            );



        res.json({

            success: true,

            complaints: complaints.rows

        });




    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};

//Admin Update Status
exports.updateStatus = async (req, res) => {


    try {


        const { status, remark } = req.body;


        const id = req.params.id;




        const oldComplaint =

            await pool.query(

                "SELECT * FROM complaints WHERE id=$1",

                [id]

            );



        await pool.query(

            `

UPDATE complaints

SET status=$1

WHERE id=$2

`,

            [status, id]

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

VALUES

($1,$2,$3,$4,$5)

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

            message: error.message

        });


    }



};