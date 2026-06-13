"use client";


import Image from "next/image";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";


import {

    CheckCircle2,
    Award,
    Sparkles

} from "lucide-react";





const achievements = [

    "Current MLA — South Solapur Constituency",

    "Former Cabinet Minister of Maharashtra",

    "Former Minister for Cooperatives, Marketing & Textile",

    "Committed journey towards public service and development"

];





const stats = [

    {
        value: "25+",
        label: "Years Public Service"
    },

    {
        value: "3×",
        label: "Elected Representative"
    },

    {
        value: "1L+",
        label: "Citizens Connected"
    }

];









export default function ImpactSection() {


    const ref = useRef(null);



    const visible = useInView(ref, {

        once: true,

        margin: "-80px"

    });







    return (


        <section

            ref={ref}

            className="
relative
overflow-hidden
py-16
sm:py-24
lg:py-32
bg-gradient-to-br
from-white
via-saffron-50/40
to-white
"

        >





            {/* DECOR */}


            <div
                className="
absolute
-top-20
-right-20
h-80
w-80
sm:h-96
sm:w-96
rounded-full
bg-saffron-300/20
blur-[100px]
"
            />


            <div
                className="
absolute
bottom-0
-left-20
h-80
w-80
rounded-full
bg-navy-300/10
blur-[100px]
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








                    {/* IMAGE */}



                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -40
                        }}

                        animate={
                            visible
                                ?
                                {
                                    opacity: 1,
                                    x: 0
                                }
                                :
                                {}
                        }

                        transition={{
                            duration: .8
                        }}

                        className="
relative
order-1
"

                    >





                        <div

                            className="
hidden
sm:block
absolute
inset-6
-rotate-6
rounded-[2rem]
bg-gradient-to-br
from-saffron-400
to-yellow-200
"

                        />






                        <div

                            className="
relative
overflow-hidden
rounded-[1.8rem]
sm:rounded-[2.5rem]
border-4
sm:border-8
border-white
shadow-[0_25px_70px_rgba(0,0,0,.18)]
"

                        >



                            <Image

                                src="/Images/subhash-deshmukh-about.jpg"

                                alt="Subhash Deshmukh"

                                width={700}

                                height={800}

                                priority

                                className="
w-full
h-[420px]
sm:h-[550px]
lg:h-[620px]
object-cover
object-top
"

                            />







                            <div

                                className="
absolute
inset-0
bg-gradient-to-t
from-navy-950/75
via-transparent
to-transparent
"

                            />








                            {/* FLOAT CARD */}


                            <motion.div

                                animate={{
                                    y: [0, -10, 0]
                                }}

                                transition={{
                                    duration: 4,
                                    repeat: Infinity
                                }}


                                className="
absolute
left-4
right-4
bottom-4
sm:left-8
sm:right-8
sm:bottom-8

rounded-2xl
sm:rounded-3xl

bg-white/90
backdrop-blur-xl

p-4
sm:p-5

shadow-xl

flex
items-center
justify-between
gap-4
"

                            >




                                <div>


                                    <h3

                                        className="
font-bold
text-sm
sm:text-base
text-navy-950
"

                                    >

                                        Leadership With Vision

                                    </h3>



                                    <p

                                        className="
text-xs
sm:text-sm
text-navy-500
"

                                    >

                                        Solapur • Maharashtra

                                    </p>



                                </div>





                                <div

                                    className="
h-11
w-11
sm:h-14
sm:w-14

rounded-xl
sm:rounded-2xl

bg-saffron-100

flex
items-center
justify-center
shrink-0
"

                                >


                                    <Award className="text-saffron-600" />


                                </div>






                            </motion.div>





                        </div>





                    </motion.div>












                    {/* CONTENT */}


                    <motion.div

                        initial={{
                            opacity: 0,
                            x: 40
                        }}

                        animate={
                            visible
                                ?
                                {
                                    opacity: 1,
                                    x: 0
                                }
                                :
                                {}
                        }

                        transition={{
                            duration: .8
                        }}


                        className="
order-2
"

                    >






                        <div

                            className="
inline-flex
items-center
gap-2

text-xs
sm:text-sm

uppercase
tracking-widest

font-bold
text-saffron-600
"

                        >


                            <Sparkles size={16} />


                            About The Leader


                        </div>








                        <h2

                            className="
mt-5

font-display

text-3xl
sm:text-4xl
lg:text-5xl

leading-tight

font-bold
text-navy-950
"

                        >

                            Shri Subhash Sureshchandra

                            <span className="text-saffron-600">

                                {" "}Deshmukh (Bapu)

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

                            A visionary leader dedicated to Solapur's progress,
                            public welfare and social transformation through
                            education, development and transparent governance.


                        </p>









                        <div

                            className="
mt-8
space-y-4
"

                        >


                            {

                                achievements.map((item, index) => (


                                    <motion.div

                                        key={index}

                                        className="
flex
items-start
gap-3

text-sm
sm:text-base

font-medium
text-navy-700
"

                                    >


                                        <CheckCircle2

                                            size={20}

                                            className="
text-saffron-500
shrink-0
mt-1
"

                                        />


                                        {item}


                                    </motion.div>


                                ))


                            }


                        </div>











                        {/* STATS */}



                        <div

                            className="
mt-10

grid

grid-cols-1
sm:grid-cols-3

gap-4
"

                        >


                            {

                                stats.map((item, index) => (


                                    <div

                                        key={index}

                                        className="
rounded-2xl

bg-white

border
border-saffron-100

shadow-card

p-5

text-center
"

                                    >



                                        <h3

                                            className="
text-3xl
lg:text-4xl

font-black
text-saffron-600
"

                                        >

                                            {item.value}

                                        </h3>



                                        <p

                                            className="
mt-2

text-xs
sm:text-sm

text-navy-500
"

                                        >

                                            {item.label}

                                        </p>



                                    </div>


                                ))


                            }



                        </div>







                    </motion.div>








                </div>



            </div>





        </section>


    )


}