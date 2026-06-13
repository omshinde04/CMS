"use client";


import { useState } from "react";


import { motion } from "framer-motion";


import {

    MapPin,
    Phone,
    Mail,
    Send,
    Loader2,
    MessageCircle,
    ShieldCheck

} from "lucide-react";


import {

    publicContactService

} from "@/services/public/publicContactService";








const contactInfo = [

    {
        icon: MapPin,
        title: "Office Location",
        value: "Solapur, Maharashtra, India"
    },

    {
        icon: Phone,
        title: "Contact Number",
        value: "+91 9373545169"
    },

    {
        icon: Mail,
        title: "Email Address",
        value: "support@example.com"
    }

];










export default function ContactPage() {


    const [loading, setLoading] =
        useState(false);



    const [form, setForm] =
        useState({

            name: "",

            email: "",

            phone: "",

            subject: "",

            message: ""

        });










    const submitForm = async (e) => {


        e.preventDefault();


        try {


            setLoading(true);


            await publicContactService
                .sendMessage(form);



            alert(
                "Message sent successfully"
            );



            setForm({

                name: "",

                email: "",

                phone: "",

                subject: "",

                message: ""

            });


        }


        catch (error) {


            alert(
                "Failed to send message"
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

            bg-[#faf8f3]

            overflow-hidden

            relative
            "

        >









            {/* BACKGROUND */}


            <div

                className="
                absolute
                top-0
                right-0

                h-96
                w-96

                bg-orange-200/40

                rounded-full

                blur-[120px]
                "

            />











            <div

                className="
                relative

                max-w-7xl

                mx-auto

                px-5
                sm:px-6
                lg:px-8

                py-16
                lg:py-20
                "

            >











                {/* HEADER */}



                <motion.div


                    initial={{
                        opacity: 0,
                        y: 30
                    }}


                    animate={{
                        opacity: 1,
                        y: 0
                    }}


                    className="
                    max-w-3xl

                    mb-14
                    "

                >





                    <div

                        className="
                        inline-flex
                        items-center

                        gap-2

                        bg-white

                        border

                        shadow-sm

                        rounded-full

                        px-5
                        py-2

                        text-orange-600

                        font-bold
                        "

                    >


                        <ShieldCheck size={18} />


                        Citizen Communication Portal


                    </div>









                    <h1

                        className="
                        mt-6

                        text-4xl
                        sm:text-5xl
                        lg:text-6xl

                        font-black

                        text-slate-950

                        leading-tight
                        "

                    >


                        Connect With Us


                    </h1>










                    <p

                        className="
                        mt-5

                        max-w-2xl

                        text-gray-600

                        leading-8
                        "

                    >


                        Share your suggestions, questions or feedback.
                        Your message helps us improve public service
                        and communication.


                    </p>





                </motion.div>













                <div

                    className="
                    grid

                    lg:grid-cols-[.85fr_1.15fr]

                    gap-10

                    items-start
                    "

                >







                    {/* LEFT INFO */}


                    <motion.div


                        initial={{
                            opacity: 0,
                            x: -40
                        }}


                        animate={{
                            opacity: 1,
                            x: 0
                        }}


                        className="
                        space-y-5
                        "

                    >




                        {

                            contactInfo.map(item => {


                                const Icon = item.icon;


                                return (



                                    <div

                                        key={item.title}


                                        className="
                                        bg-white

                                        border

                                        rounded-3xl

                                        p-6

                                        flex

                                        gap-5

                                        items-center

                                        shadow-sm

                                        hover:shadow-xl

                                        transition
                                        "

                                    >



                                        <div

                                            className="
                                            h-14
                                            w-14

                                            rounded-2xl

                                            bg-orange-50

                                            flex
                                            items-center
                                            justify-center
                                            "

                                        >


                                            <Icon

                                                className="
                                                text-orange-600
                                                "

                                            />

                                        </div>




                                        <div>


                                            <h3

                                                className="
                                                font-bold

                                                text-slate-950
                                                "

                                            >

                                                {item.title}


                                            </h3>



                                            <p

                                                className="
                                                mt-1

                                                text-gray-500
                                                "

                                            >

                                                {item.value}


                                            </p>



                                        </div>



                                    </div>


                                )

                            })


                        }









                        {/* MESSAGE BOX */}


                        <div

                            className="
                            rounded-3xl

                            bg-gradient-to-br

                            from-orange-500
                            to-orange-600

                            p-7

                            text-white

                            shadow-xl
                            "

                        >


                            <MessageCircle size={34} />


                            <h3

                                className="
                                mt-5

                                text-2xl

                                font-black
                                "

                            >

                                We Listen


                            </h3>


                            <p

                                className="
                                mt-3

                                text-white/80

                                leading-7
                                "

                            >

                                Every citizen suggestion matters
                                towards better development.


                            </p>


                        </div>







                    </motion.div>















                    {/* FORM */}


                    <motion.form


                        onSubmit={submitForm}


                        initial={{
                            opacity: 0,
                            x: 40
                        }}


                        animate={{
                            opacity: 1,
                            x: 0
                        }}



                        className="
                        bg-white

                        rounded-[32px]

                        border

                        shadow-[0_25px_80px_rgba(15,23,42,.10)]

                        p-6
                        sm:p-9

                        space-y-5
                        "

                    >







                        <div

                            className="
                            grid

                            sm:grid-cols-2

                            gap-5
                            "

                        >


                            {

                                [
                                    "name",
                                    "email",
                                    "phone",
                                    "subject"

                                ].map(item => (



                                    <input


                                        key={item}


                                        placeholder={item}


                                        value={form[item]}


                                        onChange={(e) =>


                                            setForm({

                                                ...form,

                                                [item]:
                                                    e.target.value

                                            })

                                        }


                                        className="
                                        w-full

                                        bg-[#faf8f3]

                                        border

                                        rounded-xl

                                        px-5
                                        py-4

                                        outline-none

                                        focus:border-orange-500
                                        "

                                    />



                                ))

                            }


                        </div>










                        <textarea


                            placeholder="Write your message"


                            value={form.message}


                            onChange={(e) =>


                                setForm({

                                    ...form,

                                    message: e.target.value

                                })


                            }


                            className="
                            w-full

                            h-40

                            bg-[#faf8f3]

                            border

                            rounded-xl

                            px-5
                            py-4

                            outline-none

                            focus:border-orange-500

                            resize-none
                            "

                        />











                        <button

                            disabled={loading}


                            className="
                            w-full

                            rounded-xl

                            bg-slate-950

                            text-white

                            py-4

                            flex

                            justify-center

                            items-center

                            gap-3

                            font-bold

                            hover:-translate-y-1

                            transition
                            "

                        >



                            {

                                loading ?

                                    <Loader2 className="animate-spin" />

                                    :

                                    <>

                                        <Send size={18} />

                                        Submit Message

                                    </>


                            }



                        </button>






                    </motion.form>





                </div>




            </div>




        </section>


    )


}