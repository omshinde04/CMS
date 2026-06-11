const jwt = require("jsonwebtoken");

const pool = require("../config/db");



const protect = async (req, res, next) => {


    try {


        let token;


        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {


            token =
                req.headers.authorization.split(" ")[1];


        }



        if (!token) {


            return res.status(401).json({

                success: false,

                message: "Not authorized, token missing"

            });


        }



        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );



        const user = await pool.query(

            `
            SELECT 
            id,
            name,
            email,
            role,
            status

            FROM users

            WHERE id=$1
            `,

            [decoded.id]

        );



        if (user.rows.length === 0) {


            return res.status(401).json({

                success: false,

                message: "User no longer exists"

            });


        }



        if (user.rows[0].status !== "active") {


            return res.status(403).json({

                success: false,

                message: "Account inactive"

            });


        }




        req.user = user.rows[0];



        next();



    } catch (error) {


        return res.status(401).json({

            success: false,

            message: "Invalid token"

        });


    }



};



module.exports = protect;