const pool = require("../config/db");

const sendEmail = require("../utils/sendEmail");



// =================================================
// CREATE APPOINTMENT
// PUBLIC - CITIZEN
// =================================================


exports.createAppointment = async (req, res) => {


    try {


        const {

            name,

            phone,

            email,

            reason,

            date

        } = req.body;



        if (

            !name ||

            !phone ||

            !reason ||

            !date

        ) {


            return res.status(400).json({

                success: false,

                message: "Required fields missing"

            });


        }





        const appointment = await pool.query(

            `

            INSERT INTO appointments

            (
                name,
                phone,
                email,
                reason,
                date
            )

            VALUES

            ($1,$2,$3,$4,$5)

            RETURNING *

            `,


            [

                name,

                phone,

                email,

                reason,

                date

            ]

        );





        // Send confirmation mail


        if (email) {


            await sendEmail(

                email,


                "Appointment Request Received",


                `
Hello ${name},

Your appointment request has been received successfully.

Current Status:
Pending


Our team will review your request soon.


Thank You,
Subhash Deshmukh Digital Platform

                `

            );


        }





        res.status(201).json({


            success: true,


            message: "Appointment request submitted successfully",


            appointment: appointment.rows[0]


        });





    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









// =================================================
// GET ALL APPOINTMENTS
// ADMIN
// =================================================



exports.getAppointments = async (req, res) => {


    try {


        const appointments = await pool.query(

            `

            SELECT *

            FROM appointments

            ORDER BY created_at DESC

            `

        );




        res.status(200).json({


            success: true,


            total: appointments.rows.length,


            appointments: appointments.rows


        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};










// =================================================
// UPDATE APPOINTMENT STATUS
// ADMIN
// =================================================



exports.updateAppointmentStatus = async (req, res) => {


    try {


        const { status } = req.body;


        const { id } = req.params;




        const allowedStatus = [

            "Pending",

            "Approved",

            "Rejected",

            "Completed"

        ];





        if (!allowedStatus.includes(status)) {


            return res.status(400).json({

                success: false,

                message: "Invalid appointment status"

            });


        }





        const updated = await pool.query(

            `

            UPDATE appointments


            SET status=$1


            WHERE id=$2


            RETURNING *

            `,


            [

                status,

                id

            ]

        );






        if (updated.rows.length === 0) {



            return res.status(404).json({

                success: false,

                message: "Appointment not found"

            });



        }





        const appointment = updated.rows[0];






        // Send status update email


        if (appointment.email) {



            await sendEmail(


                appointment.email,


                "Appointment Status Updated",


                `

Hello ${appointment.name},


Your appointment status has been updated.


Current Status:

${appointment.status}



Thank You,

Subhash Deshmukh Digital Platform


                `

            );


        }







        res.status(200).json({


            success: true,


            message: "Appointment status updated successfully",


            appointment


        });






    }


    catch (error) {



        res.status(500).json({

            success: false,

            message: error.message

        });



    }



};