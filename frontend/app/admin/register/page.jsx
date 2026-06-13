"use client";


import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { authService } from "@/services/authService";


import {

    User,
    Mail,
    Lock,
    ShieldCheck,
    ArrowRight,
    Landmark,
    CheckCircle2,
    UserPlus

} from "lucide-react";









export default function Register() {



    const router = useRouter();




    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        role: "admin"

    });




    const [loading, setLoading] = useState(false);








    const handleSubmit = async (e) => {


        e.preventDefault();



        try {


            setLoading(true);



            await authService.register(form);



            alert("Admin created successfully");



            router.push("/admin/login");


        }


        catch (err) {


            alert(

                err.response?.data?.message ||

                "Registration failed"

            );


        }


        finally {


            setLoading(false);


        }


    };









    return (


        <section

            className="
            min-h-screen
            grid
            lg:grid-cols-2
            overflow-hidden
            bg-gradient-to-br
            from-navy-950
            via-navy-900
            to-black
            "

        >







            {/* LEFT SIDE */}


            <div

                className="
                hidden
                lg:flex
                relative
                items-center
                px-20
                text-white
                "

            >








                <div

                    className="
                    absolute
                    inset-0
                    bg-[radial-gradient(#ffffff20_1px,transparent_1px)]
                    bg-[size:45px_45px]
                    "

                />







                <div

                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-saffron-500/25
                    blur-[150px]
                    "

                />










                <motion.div


                    initial={{
                        opacity: 0,
                        x: -50
                    }}


                    animate={{
                        opacity: 1,
                        x: 0
                    }}


                    className="
                    relative
                    max-w-xl
                    "

                >







                    <div

                        className="
                        h-20
                        w-20
                        rounded-3xl
                        bg-gradient-to-br
                        from-saffron-400
                        to-gold
                        flex
                        items-center
                        justify-center
                        shadow-xl
                        "

                    >


                        <Landmark size={42} />



                    </div>









                    <h1

                        className="
                        mt-10
                        text-5xl
                        font-bold
                        leading-tight
                        "

                    >


                        Create Secure <br />

                        Admin Access



                    </h1>








                    <p

                        className="
                        mt-6
                        text-lg
                        leading-8
                        text-white/70
                        "

                    >


                        Authorized access portal for managing
                        digital services, public information and
                        citizen communication.



                    </p>









                    <div

                        className="
                        mt-10
                        space-y-4
                        "

                    >



                        {[

                            "Role Based Administration",

                            "Secure Authentication",

                            "Digital Governance Control"


                        ].map((item) => (



                            <div

                                key={item}

                                className="
                                flex
                                items-center
                                gap-3
                                "

                            >



                                <CheckCircle2

                                    className="
                                    text-saffron-400
                                    "

                                />



                                {item}



                            </div>



                        ))}





                    </div>







                </motion.div>






            </div>











            {/* RIGHT FORM */}



            <div

                className="
                flex
                items-center
                justify-center
                px-5
                py-12
                "

            >








                <motion.form


                    initial={{
                        opacity: 0,
                        y: 40
                    }}


                    animate={{
                        opacity: 1,
                        y: 0
                    }}



                    onSubmit={handleSubmit}


                    className="
                    bg-white
                    w-full
                    max-w-md
                    rounded-[2rem]
                    p-8
                    shadow-2xl
                    "

                >









                    <div

                        className="
                        mx-auto
                        h-16
                        w-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-saffron-400
                        to-gold
                        flex
                        items-center
                        justify-center
                        text-white
                        shadow-xl
                        "

                    >



                        <UserPlus size={32} />



                    </div>








                    <h2

                        className="
                        mt-6
                        text-center
                        text-3xl
                        font-bold
                        text-navy-950
                        "

                    >


                        Register Admin



                    </h2>








                    <p

                        className="
                        mt-2
                        text-center
                        text-sm
                        text-navy-500
                        "

                    >


                        Create Leader Digital Platform account



                    </p>









                    <div className="mt-8 space-y-5">





                        <Input


                            Icon={User}

                            placeholder="Full Name"

                            value={form.name}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    name: e.target.value

                                })

                            }


                        />







                        <Input


                            Icon={Mail}

                            placeholder="Email Address"

                            value={form.email}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    email: e.target.value

                                })

                            }


                        />








                        <Input


                            Icon={Lock}

                            type="password"

                            placeholder="Password"

                            value={form.password}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    password: e.target.value

                                })

                            }


                        />




                    </div>










                    <button


                        disabled={loading}


                        className="
                        mt-8
                        w-full
                        flex
                        justify-center
                        items-center
                        gap-2
                        rounded-xl
                        bg-navy-950
                        hover:bg-navy-800
                        transition
                        text-white
                        py-3
                        font-bold
                        disabled:opacity-60
                        "

                    >




                        {

                            loading

                                ?

                                "Creating Account..."

                                :

                                <>

                                    Create Admin

                                    <ArrowRight size={18} />

                                </>


                        }




                    </button>









                    <p

                        className="
                        mt-8
                        text-center
                        text-sm
                        text-navy-600
                        "

                    >


                        Already have an account?


                        <Link

                            href="/admin/login"

                            className="
                            ml-2
                            font-bold
                            text-saffron-600
                            "

                        >


                            Login



                        </Link>



                    </p>








                </motion.form>






            </div>






        </section>


    )


}










function Input({ Icon, ...props }) {


    return (

        <div

            className="
flex
items-center
gap-3
border
border-gray-200
rounded-xl
px-4
focus-within:border-saffron-400
transition
"

        >


            <Icon

                size={18}

                className="
text-navy-500
"

            />


            <input

                className="
py-3
outline-none
w-full
text-navy-950
"

                {...props}

            />



        </div>


    )


}