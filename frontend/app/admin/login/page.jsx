"use client";


import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";


import {

    Mail,
    Lock,
    ShieldCheck,
    ArrowRight,
    Landmark,
    CheckCircle2

} from "lucide-react";







export default function Login() {


    const router = useRouter();


    const { login } = useAuth();



    const [form, setForm] = useState({


        email: "",

        password: ""


    });



    const [loading, setLoading] = useState(false);







    const handleLogin = async (e) => {


        e.preventDefault();



        try {


            setLoading(true);



            const res = await login(form);



            console.log(
                "LOGIN SUCCESS",
                res
            );



            router.replace(
                "/admin/dashboard"
            );



        }


        catch (err) {


            console.log(
                "LOGIN ERROR",
                err.response?.data || err
            );



            alert(

                err.response?.data?.message ||

                "Login failed"

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
            bg-gradient-to-br
            from-navy-950
            via-navy-900
            to-black
            overflow-hidden
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
                overflow-hidden
                "

            >



                <div

                    className="
                    absolute
                    inset-0
                    bg-[radial-gradient(#ffffff20_1px,transparent_1px)]
                    bg-[size:40px_40px]
                    "

                />



                <div

                    className="
                    absolute
                    -bottom-40
                    -left-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-saffron-500/30
                    blur-[140px]
                    "

                />







                <div className="relative max-w-xl">



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


                        Leader Digital <br />

                        Admin Portal


                    </h1>





                    <p

                        className="
                        mt-6
                        text-lg
                        leading-8
                        text-white/70
                        "

                    >


                        Secure dashboard for managing development projects,
                        public communication and citizen services.


                    </p>






                    <div className="mt-10 space-y-4">


                        {

                            [

                                "Secure Authentication",

                                "Content Management",

                                "Citizen Service Control"

                            ].map((item) => (


                                <div

                                    key={item}

                                    className="
                                    flex
                                    items-center
                                    gap-3
                                    "

                                >


                                    <CheckCircle2 className="text-saffron-400" />


                                    {item}


                                </div>


                            ))

                        }


                    </div>


                </div>


            </div>










            {/* FORM */}



            <div

                className="
                flex
                items-center
                justify-center
                px-5
                py-12
                "

            >



                <form


                    onSubmit={handleLogin}


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
                        text-white
                        flex
                        items-center
                        justify-center
                        "

                    >


                        <ShieldCheck size={32} />


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

                        Admin Login


                    </h2>







                    <div className="mt-8 space-y-5">


                        <Field

                            Icon={Mail}

                            placeholder="Email Address"

                            value={form.email}

                            onChange={(e) => setForm({

                                ...form,

                                email: e.target.value

                            })}

                        />




                        <Field

                            Icon={Lock}

                            type="password"

                            placeholder="Password"

                            value={form.password}

                            onChange={(e) => setForm({

                                ...form,

                                password: e.target.value

                            })}

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
                        text-white
                        py-3
                        font-bold
                        "

                    >


                        {

                            loading ?

                                "Checking Access..."

                                :

                                <>

                                    Login Dashboard

                                    <ArrowRight size={18} />

                                </>

                        }


                    </button>







                    <p className="mt-8 text-center text-sm">


                        Don't have access?


                        <Link

                            href="/admin/register"

                            className="
                            ml-2
                            text-saffron-600
                            font-bold
                            "

                        >


                            Register


                        </Link>


                    </p>




                </form>



            </div>




        </section>


    )


}









function Field({ Icon, ...props }) {


    return (

        <div

            className="
flex
items-center
gap-3
border
rounded-xl
px-4
focus-within:border-saffron-400
"

        >

            <Icon size={18} />


            <input

                className="
py-3
outline-none
w-full
"

                {...props}

            />


        </div>


    )


}