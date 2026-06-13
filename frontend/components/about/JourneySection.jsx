"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    Landmark,
    HeartHandshake,
    GraduationCap,
    Palette,
    Factory,
    MapPinned,
    Sparkles

} from "lucide-react";







const journey = [


    {
        icon: Landmark,

        title: "Political Leadership",

        desc:
            "A dedicated journey as MLA of South Solapur and former Cabinet Minister working towards people's development."

    },


    {
        icon: HeartHandshake,

        title: "Social Commitment",

        desc:
            "Continuous contribution through social initiatives, welfare programs and support for citizens."

    },


    {
        icon: GraduationCap,

        title: "Education Development",

        desc:
            "Creating educational opportunities and empowering youth through institutions and skill development."

    },


    {
        icon: Palette,

        title: "Cultural Promotion",

        desc:
            "Encouraging arts, sports and cultural activities to preserve social values and inspire youth."

    },


    {
        icon: Factory,

        title: "Industrial Growth",

        desc:
            "Focused efforts towards employment generation, cooperative sector and industrial development."

    },


    {
        icon: MapPinned,

        title: "Vision For Solapur",

        desc:
            "A mission to transform Solapur with infrastructure, innovation and sustainable progress."

    },


];










export default function JourneySection() {



    return (


        <section

            className="
relative
overflow-hidden

py-16
sm:py-24
lg:py-32

bg-gradient-to-br
from-navy-50
via-white
to-saffron-50
"

        >






            {/* DECOR */}


            <div

                className="
absolute
top-20
right-0

h-96
w-96

rounded-full

bg-saffron-300/20

blur-[120px]
"

            />



            <div

                className="
absolute
bottom-20
left-0

h-96
w-96

rounded-full

bg-navy-300/10

blur-[120px]
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
max-w-4xl
mx-auto

text-center

mb-14
lg:mb-20
"

                >







                    <div

                        className="
inline-flex
items-center
gap-2

rounded-full

bg-white

px-5
py-2

shadow-card

font-bold

text-saffron-600
"

                    >


                        <Sparkles size={17} />


                        Leadership Journey


                    </div>








                    <h2

                        className="
mt-6

font-display

text-3xl
sm:text-4xl
lg:text-6xl

font-bold

leading-tight

text-navy-950
"

                    >


                        A Lifetime Dedicated To

                        <span className="text-saffron-600">

                            {" "}Public Service

                        </span>


                    </h2>








                    <p

                        className="
mt-6

text-base
sm:text-lg

leading-8

text-navy-600
"

                    >


                        A journey shaped by social responsibility, development,
                        education and a vision to create a stronger Solapur.


                    </p>





                </motion.div>













                <div

                    className="
grid
grid-cols-1
lg:grid-cols-3

gap-8
lg:gap-10

items-center
"

                >








                    {/* LEFT */}



                    <div

                        className="
space-y-6
order-2
lg:order-1
"

                    >


                        {

                            journey.slice(0, 3).map((item, index) => (


                                <JourneyCard

                                    key={item.title}

                                    item={item}

                                    delay={index}

                                />


                            ))


                        }



                    </div>












                    {/* CENTER IMAGE */}



                    <motion.div


                        initial={{
                            opacity: 0,
                            scale: .9
                        }}


                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}


                        viewport={{
                            once: true
                        }}



                        className="
relative

order-1
lg:order-2
"

                    >







                        <div

                            className="
absolute

hidden
sm:block

inset-5

rotate-6

rounded-[3rem]

bg-gradient-to-br
from-saffron-400
to-yellow-200
"

                        />







                        <div

                            className="
relative

rounded-[2rem]
lg:rounded-[3rem]

overflow-hidden

border-4
lg:border-8

border-white

shadow-[0_30px_80px_rgba(0,0,0,.18)]
"

                        >





                            <Image

                                src="/Images/subhash-deshmukh-about.jpg"

                                alt="Leadership Journey"

                                width={600}

                                height={800}

                                className="
w-full

h-[420px]
sm:h-[550px]
lg:h-[650px]

object-cover
object-top
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
font-bold
text-xl
"

                                >

                                    Service With Vision

                                </h3>



                                <p

                                    className="
text-white/70
text-sm
"

                                >

                                    Solapur • Maharashtra

                                </p>




                            </div>





                        </div>





                    </motion.div>












                    {/* RIGHT */}


                    <div

                        className="
space-y-6

order-3
"

                    >


                        {

                            journey.slice(3, 6).map((item, index) => (


                                <JourneyCard

                                    key={item.title}

                                    item={item}

                                    delay={index + 3}

                                />


                            ))


                        }


                    </div>






                </div>







            </div>





        </section>


    )



}









function JourneyCard({ item, delay }) {


    const Icon = item.icon;



    return (


        <motion.div


            initial={{
                opacity: 0,
                y: 30
            }}


            whileInView={{
                opacity: 1,
                y: 0
            }}


            transition={{
                delay: delay * .08
            }}


            viewport={{
                once: true
            }}


            whileHover={{
                y: -8
            }}



            className="
group

rounded-[2rem]

bg-white/80

backdrop-blur-xl

border
border-saffron-100

p-6

shadow-card

hover:shadow-card-hover

transition-all
duration-300
"

        >





            <div

                className="
h-14
w-14

rounded-2xl

bg-gradient-to-br
from-saffron-400
to-gold

flex
items-center
justify-center

text-white

group-hover:scale-110

transition
"

            >


                <Icon />


            </div>






            <h3

                className="
mt-5

text-xl

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
sm:text-base

leading-7

text-navy-600
"

            >

                {item.desc}

            </p>






        </motion.div>


    )



}