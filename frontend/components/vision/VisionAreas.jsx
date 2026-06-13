"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    Road,
    Droplets,
    GraduationCap,
    HeartPulse,
    Tractor,
    Cpu,
    Users,
    Leaf,
    Landmark,
    CheckCircle2

} from "lucide-react";





const visionAreas = [

    {
        icon: Road,
        title: "Infrastructure Growth",
        desc: "Modern roads, public facilities and planned urban development for a progressive Solapur."
    },


    {
        icon: Droplets,
        title: "Water Security",
        desc: "Sustainable solutions focused on reliable water supply and better civic facilities."
    },


    {
        icon: GraduationCap,
        title: "Education Empowerment",
        desc: "Building opportunities through quality education, institutions and skill development."
    },


    {
        icon: HeartPulse,
        title: "Healthcare Access",
        desc: "Improving healthcare services and welfare initiatives for every citizen."
    },


    {
        icon: Tractor,
        title: "Agriculture Development",
        desc: "Supporting farmers, villages and rural economic growth."
    },


    {
        icon: Cpu,
        title: "Digital Governance",
        desc: "Technology-driven governance connecting citizens with transparent services."
    },


    {
        icon: Users,
        title: "People Welfare",
        desc: "Development focused on citizens, communities and inclusive growth."
    },


    {
        icon: Leaf,
        title: "Sustainable Future",
        desc: "Balanced development while protecting environment and resources."
    }

];








export default function VisionAreas() {



    return (


        <section

            className="
relative
overflow-hidden

py-20
lg:py-32

bg-white
"

        >






            {/* PREMIUM BACKGROUND */}


            <div

                className="
absolute
top-0
right-0

w-[600px]
h-[600px]

bg-saffron-100

rounded-full

blur-[160px]

opacity-70
"

            />










            <div

                className="
relative

max-w-7xl

mx-auto

px-4
sm:px-6
lg:px-8
"

            >








                {/* HEADER */}



                <motion.div


                    initial={{
                        opacity: 0,
                        y: 40
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
"

                >





                    <div

                        className="
flex
items-center
gap-3

text-saffron-600

font-bold

uppercase

tracking-[0.25em]

text-sm
"

                    >


                        <span className="h-[2px] w-12 bg-saffron-500" />


                        Development Vision


                    </div>







                    <h2

                        className="
mt-6

font-display

text-4xl
sm:text-5xl
lg:text-6xl

font-black

leading-tight

text-navy-950
"

                    >

                        A Vision Towards

                        <span className="block text-saffron-600">

                            A Developed Solapur

                        </span>


                    </h2>








                    <p

                        className="
mt-6

text-lg

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
mt-20

grid

lg:grid-cols-[0.9fr_1.1fr]

gap-16

items-center
"

                >









                    {/* IMAGE SIDE */}



                    <motion.div


                        initial={{
                            opacity: 0,
                            x: -50
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}

                        viewport={{
                            once: true
                        }}


                        className="
relative
"

                    >


                        <div

                            className="
absolute

-inset-5

rounded-[3rem]

bg-gradient-to-br
from-saffron-300
to-transparent

rotate-3
"

                        />





                        <div

                            className="
relative

rounded-[2.5rem]

overflow-hidden

shadow-[0_30px_90px_rgba(0,0,0,.20)]
"

                        >


                            <Image

                                src="/Images/sahitya-puraskar.jpg"

                                alt="Vision"

                                width={700}

                                height={800}

                                className="
w-full

h-[420px]
sm:h-[650px]

object-cover
"

                            />




                            <div

                                className="
absolute
bottom-0
left-0
right-0

p-8

bg-gradient-to-t
from-navy-950
to-transparent
"

                            >


                                <h3

                                    className="
text-white

text-2xl

font-bold
"

                                >

                                    Vision With Action

                                </h3>


                                <p

                                    className="
text-white/70
mt-2
"

                                >

                                    Development • Service • Progress

                                </p>


                            </div>




                        </div>



                    </motion.div>













                    {/* RIGHT VISION LIST */}


                    <div

                        className="
grid

sm:grid-cols-2

gap-5
"

                    >



                        {

                            visionAreas.map((item, index) => {


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
                                            delay: index * .06
                                        }}


                                        viewport={{
                                            once: true
                                        }}


                                        className="
group

rounded-3xl

bg-white

border
border-gray-100

p-6

shadow-[0_15px_50px_rgba(15,23,42,.08)]

hover:shadow-[0_25px_70px_rgba(15,23,42,.14)]

transition
"

                                    >





                                        <div

                                            className="
flex
gap-4
"

                                        >



                                            <div

                                                className="
h-12
w-12

rounded-xl

bg-saffron-50

flex
items-center
justify-center

shrink-0
"

                                            >


                                                <Icon className="text-saffron-600" />


                                            </div>





                                            <div>


                                                <h3

                                                    className="
font-bold

text-lg

text-navy-950
"

                                                >

                                                    {item.title}

                                                </h3>



                                                <p

                                                    className="
mt-2

text-sm

leading-6

text-navy-500
"

                                                >

                                                    {item.desc}

                                                </p>


                                            </div>




                                        </div>





                                    </motion.div>




                                )


                            })


                        }




                    </div>









                </div>










                {/* BOTTOM STATEMENT */}



                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}


                    className="
mt-24

rounded-[2rem]

bg-navy-950

text-white

p-8
sm:p-12

flex
flex-col
md:flex-row

gap-8

items-center
justify-between
"

                >



                    <div>


                        <h3

                            className="
text-3xl

font-bold
"

                        >

                            Committed Leadership For Future Generations

                        </h3>


                        <p className="mt-3 text-white/60">

                            A continuous journey of service, progress and development.

                        </p>


                    </div>




                    <CheckCircle2

                        size={70}

                        className="text-saffron-400"

                    />



                </motion.div>









            </div>





        </section>


    )

}