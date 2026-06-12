const pool = require("../config/db");




// DASHBOARD STATS


exports.getStats = async (req, res) => {


    try {



        const complaints =
            await pool.query(

                `
SELECT COUNT(*) 
FROM complaints

`

            );




        const pending =
            await pool.query(

                `
SELECT COUNT(*) 
FROM complaints

WHERE status!='Resolved'

`

            );





        const resolved =
            await pool.query(

                `
SELECT COUNT(*) 
FROM complaints

WHERE status='Resolved'

`

            );





        const appointments =
            await pool.query(

                `
SELECT COUNT(*) 
FROM appointments

`

            );




        const blogs =
            await pool.query(

                `
SELECT COUNT(*)

FROM blogs

`

            );





        const gallery =
            await pool.query(

                `
SELECT COUNT(*)

FROM gallery

`

            );





        const users =
            await pool.query(

                `
SELECT COUNT(*)

FROM users

`

            );





        res.json({


            success: true,


            stats: {


                complaints:
                    complaints.rows[0].count,


                pending:
                    pending.rows[0].count,


                resolved:
                    resolved.rows[0].count,


                appointments:
                    appointments.rows[0].count,


                blogs:
                    blogs.rows[0].count,


                gallery:
                    gallery.rows[0].count,


                users:
                    users.rows[0].count



            }


        });




    }

    catch (error) {



        res.status(500).json({

            success: false,

            message: error.message


        });



    }



};


//Add Complaint Chart Data

exports.complaintChart = async (req, res) => {


    try {


        const result =

            await pool.query(

                `

SELECT 

status,

COUNT(*)


FROM complaints


GROUP BY status


`

            );



        res.json({

            success: true,

            chart: result.rows


        });




    }

    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }



};