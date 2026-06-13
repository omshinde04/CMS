"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    BookOpen,
    MapPinned,
    MessageCircle,
    HandHeart,
    Sparkles,
    Calendar

} from "lucide-react";







const journey = [


    {

        icon: BookOpen,

        title: "Early Life & Values",

        text:
            "Born on 12 March 1957, Shri Subhash Deshmukh was raised with strong values of discipline, education and social responsibility inspired by his family background."

    },


    {

        icon: MapPinned,

        title: "Commitment Towards Solapur",

        text:
            "His journey has always focused on restoring Solapur's identity through development, opportunities, infrastructure and public welfare."

    },


    {

        icon: MessageCircle,

        title: "Connected Leadership",

        text:
            "A people-first approach focused on understanding citizens, solving problems and maintaining direct communication with society."

    },


    {

        icon: HandHeart,

        title: "Service & Development Vision",

        text:
            "Dedicated contribution in education, cooperative development, social initiatives and sustainable growth for future generations."

    }


];









export default function BiographySection() {





    return (


        <section

            className="
relative
overflow-hidden

py-16
sm:py-24
lg:py-32

bg-gradient-to-b
from-white
via-saffron-50/30
to-white
"

        >






            {/* BACKGROUND EFFECT */}


            <div

                className="
absolute
top-20
right-0

h-80
w-80
sm:h-96
sm:w-96

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

h-80
w-80

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

px-5
py-2

rounded-full

bg-saffron-100

text-saffron-700

font-bold
text-sm

mb-5
"

                    >


                        <Sparkles size={16} />


                        Leadership Journey


                    </div>








                    <h2

                        className="
font-display

text-3xl
sm:text-4xl
lg:text-5xl

font-bold

leading-tight

text-navy-950
"

                    >


                        A Journey Built On Service,

                        <span className="text-saffron-600">

                            {" "}Values & Development

                        </span>


                    </h2>









                    <p

                        className="
mt-5

text-base
sm:text-lg

leading-8

text-navy-600
"

                    >


                        From a foundation of strong values to decades of public
                        service, his journey represents dedication towards people
                        and progress of Solapur.


                    </p>





                </motion.div>












                <div

                    className="
grid
grid-cols-1
lg:grid-cols-2

gap-14
lg:gap-20

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


                        transition={{
                            duration: .8
                        }}



                        className="
relative
"

                    >





                        <div

                            className="
hidden
sm:block

absolute

-inset-4

rotate-3

rounded-[2.5rem]

bg-gradient-to-br
from-saffron-400
to-yellow-200
"

                        />








                        <div

                            className="
relative

overflow-hidden

rounded-[2rem]
sm:rounded-[2.5rem]

border-4
sm:border-8
border-white

shadow-[0_30px_80px_rgba(0,0,0,.18)]
"

                        >






                            <Image


                                src="/Images/subhash-biography.jpg"

                                alt="Subhash Deshmukh Journey"


                                width={800}

                                height={700}


                                className="
w-full

h-[380px]
sm:h-[520px]
lg:h-[600px]

object-cover
object-top
"

                            />







                            <div

                                className="
absolute
inset-0

bg-gradient-to-t
from-navy-950/80
via-transparent
to-transparent
"

                            />









                            <div

                                className="
absolute

left-4
right-4
bottom-4

sm:left-8
sm:right-auto

rounded-3xl

bg-white/90
backdrop-blur-xl

p-5

shadow-xl
"

                            >



                                <div

                                    className="
flex
gap-4
items-center
"

                                >



                                    <div

                                        className="
h-12
w-12

rounded-2xl

bg-saffron-100

flex
items-center
justify-center
"

                                    >


                                        <Calendar className="text-saffron-600" />


                                    </div>




                                    <div>


                                        <h3

                                            className="
text-3xl
font-black
text-navy-950
"

                                        >

                                            1957

                                        </h3>



                                        <p

                                            className="
text-sm
text-navy-500
"

                                        >

                                            Beginning Of Journey

                                        </p>


                                    </div>



                                </div>



                            </div>






                        </div>






                    </motion.div>













                    {/* CONTENT CARDS */}



                    <div

                        className="
space-y-5
"

                    >



                        {


                            journey.map((item, index) => {


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
                                            delay: index * .1
                                        }}


                                        viewport={{
                                            once: true
                                        }}



                                        className="
group

rounded-3xl

bg-white/80
backdrop-blur-xl

border
border-saffron-100

p-5
sm:p-7

shadow-card

hover:shadow-card-hover

transition-all
duration-300
"

                                    >





                                        <div

                                            className="
flex
gap-5
items-start
"

                                        >




                                            <div

                                                className="
h-12
w-12
sm:h-14
sm:w-14

rounded-2xl

bg-saffron-500

text-white

flex
items-center
justify-center

shrink-0

group-hover:scale-110

transition
"

                                            >


                                                <Icon />


                                            </div>






                                            <div>


                                                <h3

                                                    className="
text-lg
sm:text-xl

font-bold

text-navy-950
"

                                                >


                                                    {item.title}


                                                </h3>






                                                <p

                                                    className="
mt-2

text-sm
sm:text-base

leading-7

text-navy-600
"

                                                >


                                                    {item.text}


                                                </p>





                                            </div>






                                        </div>





                                    </motion.div>


                                )



                            })


                        }




                    </div>






                </div>





            </div>




        </section>


    )



}