"use client";


import { motion } from "framer-motion";


import {

    ShieldCheck,
    Users,
    Cpu,
    Leaf,
    Landmark,
    CheckCircle2

} from "lucide-react";





const pillars = [

    {
        icon: ShieldCheck,
        title: "Transparent Governance",
        text: "Strengthening public trust through responsible administration."
    },

    {
        icon: Users,
        title: "Citizen Empowerment",
        text: "Creating opportunities and better services for every citizen."
    },

    {
        icon: Cpu,
        title: "Digital Transformation",
        text: "Modern technology driven governance and connectivity."
    },

    {
        icon: Leaf,
        title: "Sustainable Growth",
        text: "Balanced development with future focused planning."
    }

];





const goals = [

    "Modern infrastructure development",

    "Education and employment opportunities",

    "Efficient citizen service delivery",

    "Long term sustainable progress"

];









export default function VisionFuture() {


    return (


        <section

            className="
relative
overflow-hidden

py-20

bg-[#faf8f3]
"

        >




            {/* Background Pattern */}


            <div

                className="
absolute
inset-0

bg-[linear-gradient(to_right,#0e1f4006_1px,transparent_1px),linear-gradient(to_bottom,#0e1f4006_1px,transparent_1px)]

bg-[size:60px_60px]
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
"

            >







                {/* HEADER */}


                <motion.div


                    initial={{
                        opacity: 0,
                        y: 30
                    }}


                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}


                    className="
max-w-3xl

mb-14
"

                >




                    <div

                        className="
flex
items-center
gap-3

text-saffron-600

font-bold

tracking-[0.2em]

uppercase

text-xs
"

                    >


                        <span

                            className="
                        h-px
                        w-10
                        bg-saffron-500
                        "
                        />


                        Development Framework


                    </div>






                    <h2

                        className="
mt-5

font-display

text-3xl
sm:text-5xl

font-black

text-navy-950
"

                    >

                        A Vision Towards

                        <span className="text-saffron-600">
                            {" "}A Developed Solapur
                        </span>


                    </h2>





                    <p

                        className="
                    mt-5

                    leading-8

                    text-navy-600
                    "

                    >

                        Focused leadership approach towards infrastructure,
                        education, agriculture, technology and citizen welfare
                        for long term progress.


                    </p>





                </motion.div>









                {/* MAIN CONTENT */}


                <div

                    className="
grid

lg:grid-cols-[.9fr_1.1fr]

gap-10

items-start
"

                >






                    {/* LEFT PANEL */}


                    <motion.div


                        initial={{
                            opacity: 0,
                            x: -30
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}



                        className="
                    rounded-[28px]

                    bg-white

                    border

                    shadow-[0_20px_60px_rgba(15,23,42,.08)]

                    p-8
                    "

                    >



                        <div

                            className="
                        h-14
                        w-14

                        rounded-2xl

                        bg-saffron-50

                        flex
                        items-center
                        justify-center
                        "

                        >


                            <Landmark

                                size={30}

                                className="
                            text-saffron-600
                            "

                            />


                        </div>





                        <h3

                            className="
                        mt-6

                        text-2xl

                        font-bold

                        text-navy-950
                        "

                        >

                            Development Priorities

                        </h3>





                        <div

                            className="
                        mt-6

                        space-y-4
                        "

                        >



                            {


                                goals.map(item => (


                                    <div

                                        key={item}

                                        className="
                                flex
                                gap-3

                                text-navy-700
                                font-medium
                                "

                                    >


                                        <CheckCircle2

                                            size={18}

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




                    </motion.div>









                    {/* RIGHT GRID */}



                    <div

                        className="
                    grid

                    sm:grid-cols-2

                    gap-5
                    "

                    >



                        {

                            pillars.map((item, index) => {


                                const Icon = item.icon;


                                return (


                                    <motion.div


                                        key={item.title}


                                        initial={{
                                            opacity: 0,
                                            y: 30
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        transition={{
                                            delay: index * .08
                                        }}

                                        viewport={{
                                            once: true
                                        }}


                                        className="
                                group

                                rounded-3xl

                                bg-white

                                border

                                p-7

                                shadow-sm

                                hover:shadow-xl

                                transition
                                "

                                    >



                                        <Icon

                                            size={30}

                                            className="
                                    text-saffron-600
                                    "

                                        />



                                        <h3

                                            className="
                                    mt-5

                                    text-lg

                                    font-bold

                                    text-navy-950
                                    "

                                        >

                                            {item.title}

                                        </h3>



                                        <p

                                            className="
                                    mt-3

                                    text-sm

                                    leading-7

                                    text-navy-500
                                    "

                                        >

                                            {item.text}

                                        </p>




                                    </motion.div>



                                )


                            })


                        }




                    </div>







                </div>









                {/* QUOTE BAR */}



                <div

                    className="
                mt-14

                rounded-2xl

                bg-white

                border-l-4
                border-saffron-500

                shadow-sm

                px-8
                py-6

                text-navy-700

                font-medium
                "

                >

                    “Committed towards service, development and progress
                    for a stronger South Solapur.”

                </div>






            </div>




        </section>


    )


}