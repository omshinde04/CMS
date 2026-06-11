const bcrypt = require("bcrypt");

const pool = require("../config/db");

const generateToken = require("../utils/generateToken");



// REGISTER USER


exports.register = async (req, res) => {


    try {


        const {

            name,

            email,

            password,

            role

        } = req.body;



        if (
            !name ||
            !email ||
            !password
        ) {

            return res.status(400).json({

                message: "All fields required"

            });

        }




        const existingUser =
            await pool.query(

                "SELECT * FROM users WHERE email=$1",

                [email]

            );



        if (existingUser.rows.length > 0) {


            return res.status(409).json({

                message: "Email already exists"

            });


        }




        const hashedPassword =
            await bcrypt.hash(password, 10);




        const user =
            await pool.query(

                `
INSERT INTO users
(name,email,password,role)

VALUES($1,$2,$3,$4)

RETURNING id,name,email,role
`,

                [

                    name,

                    email,

                    hashedPassword,

                    role

                ]

            );




        res.status(201).json({

            message: "User created successfully",

            user: user.rows[0]

        });



    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }



};





// LOGIN



exports.login = async (req, res) => {


    try {


        const {

            email,

            password

        } = req.body;



        const result =

            await pool.query(

                "SELECT * FROM users WHERE email=$1",

                [email]

            );



        if (result.rows.length === 0) {


            return res.status(401).json({

                message: "Invalid credentials"

            });


        }




        const user = result.rows[0];




        const match =

            await bcrypt.compare(

                password,

                user.password

            );



        if (!match) {


            return res.status(401).json({

                message: "Invalid credentials"

            });


        }





        const token = generateToken(user);



        res.json({

            message: "Login successful",


            token,


            user: {


                id: user.id,

                name: user.name,

                email: user.email,

                role: user.role


            }


        });




    }

    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }



};


//profile controller
exports.profile = async (req, res) => {


    res.status(200).json({


        success: true,


        user: req.user


    });


};