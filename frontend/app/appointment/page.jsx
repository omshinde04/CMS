"use client";


import { useState } from "react";

import { motion } from "framer-motion";


import {

    CalendarDays,
    User,
    Phone,
    Mail,
    MessageSquare,
    Send,
    Loader2,
    CheckCircle2,
    ShieldCheck

} from "lucide-react";



import {

    appointmentService

} from "@/services/appointmentService";









export default function AppointmentPage() {



    const [loading, setLoading] =
        useState(false);



    const [success, setSuccess] =
        useState(false);




    const [form, setForm] =
        useState({


            name: "",

            phone: "",

            email: "",

            reason: "",

            date: ""


        });









    const handleChange = (e) => {


        setSuccess(false);


        setForm({


            ...form,


            [e.target.name]:
                e.target.value


        });



    };









    const submitAppointment = async (e) => {



        e.preventDefault();




        try {



            setLoading(true);






            const res =
                await appointmentService.create(

                    form

                );






            if (res.success) {



                setSuccess(true);




                setForm({


                    name: "",

                    phone: "",

                    email: "",

                    reason: "",

                    date: ""


                });



            }





        }


        catch (error) {



            alert(

                error.response?.data?.message

                ||

                "Unable to submit appointment"

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
bg-gradient-to-br
from-orange-50
via-white
to-slate-100
px-5
py-20
overflow-hidden
"

        >







            <div

                className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-14
items-center
"

            >







                {/* LEFT SIDE */}


                <motion.div


                    initial={{

                        opacity: 0,

                        x: -60

                    }}


                    animate={{

                        opacity: 1,

                        x: 0

                    }}



                >






                    <div

                        className="
inline-flex
items-center
gap-2
bg-orange-100
text-orange-600
px-5
py-2
rounded-full
font-bold
shadow
"

                    >


                        <ShieldCheck size={18} />


                        Digital Appointment System


                    </div>










                    <h1

                        className="
mt-8
text-5xl
md:text-7xl
font-black
leading-tight
text-slate-950
"

                    >


                        Book Your


                        <br />


                        Appointment


                    </h1>










                    <p

                        className="
mt-6
text-lg
text-gray-500
leading-8
max-w-xl
"

                    >


                        Connect directly through the digital platform.

                        Submit your request and our team will contact you.


                    </p>











                    <div

                        className="
mt-10
grid
sm:grid-cols-2
gap-5
"

                    >






                        <motion.div

                            whileHover={{
                                y: -8
                            }}


                            className="
bg-white
rounded-[2rem]
p-6
shadow-xl
border
"

                        >


                            <CalendarDays

                                size={35}

                                className="
text-orange-500
"

                            />


                            <h3

                                className="
font-bold
mt-5
"

                            >

                                Easy Booking

                            </h3>



                            <p

                                className="
text-gray-500
text-sm
mt-2
"

                            >

                                Choose date anytime


                            </p>



                        </motion.div>









                        <motion.div

                            whileHover={{
                                y: -8
                            }}

                            className="
bg-white
rounded-[2rem]
p-6
shadow-xl
border
"

                        >


                            <CheckCircle2

                                size={35}

                                className="
text-green-600
"

                            />



                            <h3

                                className="
font-bold
mt-5
"

                            >

                                Quick Response


                            </h3>



                            <p

                                className="
text-gray-500
text-sm
mt-2
"

                            >

                                Get appointment updates


                            </p>


                        </motion.div>







                    </div>






                </motion.div>












                {/* FORM */}


                <motion.form


                    onSubmit={submitAppointment}


                    initial={{

                        opacity: 0,

                        y: 60

                    }}



                    animate={{

                        opacity: 1,

                        y: 0

                    }}




                    className="
bg-white/90
backdrop-blur-xl
rounded-[3rem]
shadow-2xl
border
p-8
md:p-10
space-y-5
"

                >







                    {


                        success &&


                        <div

                            className="
bg-green-100
text-green-700
rounded-2xl
p-5
font-bold
flex
items-center
gap-3
"

                        >


                            <CheckCircle2 />


                            Appointment submitted successfully


                        </div>


                    }










                    <InputBox icon={<User />}>

                        <input

                            required

                            name="name"

                            placeholder="Full Name"

                            value={form.name}

                            onChange={handleChange}

                        />

                    </InputBox>









                    <div

                        className="
grid
md:grid-cols-2
gap-4
"

                    >



                        <InputBox icon={<Phone />}>

                            <input

                                required

                                name="phone"

                                placeholder="Phone"

                                value={form.phone}

                                onChange={handleChange}

                            />

                        </InputBox>







                        <InputBox icon={<Mail />}>

                            <input


                                name="email"

                                placeholder="Email"

                                value={form.email}

                                onChange={handleChange}

                            />

                        </InputBox>



                    </div>









                    <InputBox icon={<CalendarDays />}>


                        <input

                            required

                            type="date"

                            name="date"

                            value={form.date}

                            onChange={handleChange}

                        />


                    </InputBox>











                    <div

                        className="
border
rounded-[2rem]
p-5
flex
gap-4
"

                    >


                        <MessageSquare />


                        <textarea


                            required

                            name="reason"

                            placeholder="Reason for appointment"

                            value={form.reason}

                            onChange={handleChange}


                            className="
w-full
outline-none
resize-none
min-h-36
bg-transparent
"

                        />


                    </div>









                    <button


                        disabled={loading}


                        className="
w-full
rounded-2xl
bg-slate-950
text-white
py-4
font-bold
flex
justify-center
items-center
gap-3
hover:scale-[1.02]
transition
"

                    >




                        {


                            loading

                                ?

                                <Loader2

                                    className="animate-spin"

                                />


                                :


                                <>


                                    <Send size={20} />


                                    Submit Appointment


                                </>


                        }



                    </button>






                </motion.form>






            </div>





        </section>


    )


}









function InputBox({

    children,

    icon

}) {


    return (


        <div

            className="
flex
items-center
gap-3
border
rounded-[2rem]
p-5
focus-within:ring-2
focus-within:ring-orange-400
transition
"

        >


            <span

                className="
text-orange-500
"

            >

                {icon}

            </span>



            <div

                className="
w-full
[&_input]:w-full
[&_input]:outline-none
[&_input]:bg-transparent
"

            >


                {children}


            </div>



        </div>


    )


}