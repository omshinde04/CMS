"use client";


import { motion } from "framer-motion";


import {

    Trophy,
    Medal,
    Award,
    Sparkles,
    Star,
    Crown

} from "lucide-react";








const awards = [


    {
        year: "2024",

        title: "Outstanding Leadership Recognition",

        by: "Recognized for contribution towards public welfare, development and citizen-focused leadership."

    },


    {
        year: "2022",

        title: "Social Service Excellence",

        by: "Honoured for continuous initiatives in education, healthcare and community development."

    },


    {
        year: "2020",

        title: "Development Contribution Award",

        by: "Recognition for infrastructure development and progressive work for Solapur region."

    },


    {
        year: "2018",

        title: "Educational Development Contribution",

        by: "Appreciation for strengthening educational opportunities and institutions."

    },


    {
        year: "2016",

        title: "Cooperative Sector Leadership",

        by: "Contribution towards cooperative development, marketing and textile sectors."

    },


    {
        year: "2015",

        title: "People's Representative Honour",

        by: "Recognition for dedicated public service and commitment towards society."

    }


];








const stats = [


    {
        value: "25+",
        title: "Years Service"
    },


    {
        value: "500+",
        title: "Social Initiatives"
    },


    {
        value: "1L+",
        title: "Citizens Connected"
    }

];









export default function AwardsSection() {





    return (


        <section

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








            {/* BACKGROUND */}


            <div

                className="
absolute
top-20
-left-20

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
-right-20

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

text-saffron-600

font-bold
"

                    >


                        <Trophy size={18} />


                        Achievements & Recognition


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


                        Honours Reflecting

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


                        A journey of commitment, leadership and contribution
                        towards society, development and welfare of citizens.


                    </p>






                </motion.div>









                {/* STATS */}


                <div

                    className="
mt-14

grid

grid-cols-1
sm:grid-cols-3

gap-6
"

                >


                    {


                        stats.map((item, index) => (


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
rounded-[2rem]

bg-white/80
backdrop-blur-xl

border
border-saffron-100

p-8

text-center

shadow-card

hover:shadow-card-hover

transition
"

                            >


                                <Award

                                    className="
mx-auto
text-saffron-500
"

                                />



                                <h3

                                    className="
mt-5

text-4xl
sm:text-5xl

font-black

text-navy-950
"

                                >


                                    {item.value}


                                </h3>



                                <p

                                    className="
mt-2
text-navy-600
"

                                >

                                    {item.title}

                                </p>




                            </motion.div>


                        ))


                    }


                </div>











                {/* AWARD GRID */}


                <div

                    className="
mt-20

grid

grid-cols-1
md:grid-cols-2
lg:grid-cols-3

gap-8
"

                >



                    {


                        awards.map((item, index) => (


                            <motion.div


                                key={index}


                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}


                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}


                                transition={{
                                    delay: index * .07
                                }}


                                viewport={{
                                    once: true
                                }}


                                whileHover={{
                                    y: -12
                                }}


                                className="
group

relative

overflow-hidden

rounded-[2rem]

bg-white

p-6
sm:p-8

border
border-saffron-100

shadow-card

hover:shadow-card-hover

transition-all
"

                            >








                                <div

                                    className="
absolute

inset-0

bg-gradient-to-r

from-transparent
via-saffron-100/50
to-transparent

-translate-x-full

group-hover:translate-x-full

transition

duration-700
"

                                />








                                <div

                                    className="
relative

flex
justify-between
items-start
"

                                >



                                    <div

                                        className="
h-14
w-14

sm:h-16
sm:w-16

rounded-2xl

bg-gradient-to-br
from-saffron-400
to-gold

flex
items-center
justify-center

text-white

shadow-card
"

                                    >


                                        <Medal size={28} />


                                    </div>







                                    <span

                                        className="
rounded-full

bg-navy-50

px-4
py-2

text-sm

font-bold

text-navy-700
"

                                    >


                                        {item.year}


                                    </span>




                                </div>









                                <div className="relative mt-8">


                                    <h3

                                        className="
text-xl

font-bold

leading-snug

text-navy-950
"

                                    >

                                        {item.title}

                                    </h3>





                                    <p

                                        className="
mt-4

leading-7

text-sm
sm:text-base

text-navy-600
"

                                    >


                                        {item.by}


                                    </p>




                                </div>









                                <div

                                    className="
relative

mt-8

flex

items-center

gap-2

font-semibold

text-saffron-600
"

                                >


                                    <Star size={16} />


                                    Recognition


                                </div>







                            </motion.div>


                        ))


                    }



                </div>










                {/* FINAL CTA */}



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
mt-20

rounded-[2rem]

bg-gradient-to-r
from-saffron-500
to-gold

p-8
sm:p-12

text-center

shadow-card-hover
"

                >



                    <Crown

                        className="
mx-auto
text-white
"

                    />



                    <h3

                        className="
mt-5

text-2xl
sm:text-3xl

font-bold

text-white
"

                    >


                        Service • Development • Commitment


                    </h3>




                </motion.div>








            </div>




        </section>


    )



}