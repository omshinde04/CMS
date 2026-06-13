"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    Award,
    Users,
    Building2,
    ShieldCheck,
    ArrowRight,
    CheckCircle2

} from "lucide-react";






const stats = [

    {
        icon: Award,
        value: "25+",
        label: "Years Public Service"
    },


    {
        icon: Building2,
        value: "150+",
        label: "Development Works"
    },


    {
        icon: Users,
        value: "1L+",
        label: "Citizens Connected"
    }

];





const points = [

    "Modern infrastructure and planned urban development",

    "Education, employment and opportunities for youth",

    "Transparent governance with people-first approach"

];










export default function VisionIntro() {


    return (


        <section

            className="
            relative
            overflow-hidden
            bg-white
            "

        >







            {/* HERO */}



            <div

                className="
                relative

                min-h-[620px]
                lg:min-h-[calc(100vh-85px)]

                flex
                items-center

                pt-8
                lg:pt-0

                pb-14
                lg:pb-20
                "

            >







                <Image


                    src="/Images/final-banner2.jpg"

                    alt="Vision"

                    fill

                    priority


                    className="
                    object-cover
                    object-center
                    "

                />







                {/* WHITE GOVERNMENT OVERLAY */}



                <div

                    className="
                    absolute
                    inset-0

                    bg-gradient-to-r

                    from-white

                    via-white/90

                    to-white/30
                    "

                />




                <div

                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-white

                    via-transparent

                    to-transparent
                    "

                />









                <div

                    className="
                    relative
                    z-10

                    max-w-7xl

                    mx-auto

                    w-full

                    px-5
                    sm:px-6
                    lg:px-8
                    "

                >








                    <motion.div


                        initial={{
                            opacity: 0,
                            y: 40
                        }}


                        animate={{
                            opacity: 1,
                            y: 0
                        }}


                        transition={{
                            duration: .8
                        }}



                        className="
                        max-w-3xl

                        lg:-translate-y-8
                        "

                    >









                        {/* BADGE */}



                        <div

                            className="
                            inline-flex

                            items-center

                            gap-3

                            rounded-full

                            bg-white

                            border
                            border-saffron-100

                            shadow-lg

                            px-5
                            py-3

                            text-saffron-600

                            font-bold
                            "

                        >


                            <ShieldCheck size={18} />


                            Vision Document 2030


                        </div>










                        {/* TITLE */}


                        <h1

                            className="
                            mt-6

                            font-display

                            text-4xl
                            sm:text-5xl
                            lg:text-6xl

                            leading-tight

                            font-black

                            text-navy-950
                            "

                        >


                            A Vision For


                            <span

                                className="
                                block

                                text-saffron-600
                                "

                            >

                                Developed Solapur

                            </span>



                        </h1>










                        <p

                            className="
                            mt-5

                            max-w-2xl

                            text-base
                            sm:text-lg

                            leading-8

                            text-navy-600
                            "

                        >


                            A commitment towards planned development,
                            citizen empowerment, better infrastructure and
                            progressive growth.


                        </p>










                        {/* POINTS */}


                        <div

                            className="
                            mt-6

                            space-y-3
                            "

                        >


                            {


                                points.map((item, index) => (


                                    <div

                                        key={index}

                                        className="
                                        flex

                                        gap-3

                                        items-center

                                        font-semibold

                                        text-navy-700
                                        "

                                    >


                                        <CheckCircle2

                                            size={19}

                                            className="
                                            text-saffron-500
                                            shrink-0
                                            "

                                        />


                                        {item}


                                    </div>


                                ))

                            }


                        </div>










                        <button

                            className="
                            mt-7

                            inline-flex

                            items-center

                            gap-3

                            bg-navy-950

                            text-white

                            px-7
                            py-4

                            rounded-xl

                            font-bold

                            shadow-xl

                            hover:-translate-y-1

                            transition
                            "

                        >


                            Explore Development Roadmap


                            <ArrowRight size={18} />


                        </button>






                    </motion.div>






                </div>






            </div>


















        </section>


    )


}