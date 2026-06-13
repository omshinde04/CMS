"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    GraduationCap,
    HeartHandshake,
    Building2,
    Landmark,
    UsersRound,
    Leaf,
    ArrowRight,
    Sparkles

} from "lucide-react";







const works = [


    {

        icon: GraduationCap,

        title: "Educational Empowerment",

        desc:
            "Developing quality educational institutions and creating opportunities for students through knowledge, skills and innovation.",

        image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"

    },



    {

        icon: HeartHandshake,

        title: "Social Service Initiatives",

        desc:
            "Supporting society through welfare programs, healthcare initiatives and community development activities.",

        image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a"

    },



    {

        icon: Building2,

        title: "Infrastructure Growth",

        desc:
            "Working towards roads, water facilities, urban development and stronger infrastructure for Solapur.",

        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"

    },



    {

        icon: Landmark,

        title: "Governance & Public Service",

        desc:
            "Ensuring transparent governance and helping citizens receive government schemes and benefits.",

        image:
            "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"

    },



    {

        icon: UsersRound,

        title: "Community Development",

        desc:
            "Connecting with citizens, understanding problems and building people-focused development solutions.",

        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952"

    },



    {

        icon: Leaf,

        title: "Agriculture & Rural Growth",

        desc:
            "Supporting farmers, villages and sustainable development through progressive initiatives.",

        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef"

    },


];









export default function WorkSection() {





    return (


        <section

            className="
relative
overflow-hidden
py-20
sm:py-28
bg-gradient-to-b
from-white
via-saffron-50/30
to-white
"

        >







            {/* BACKGROUND DECOR */}


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
max-w-4xl
mx-auto
text-center
mb-14
sm:mb-20
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


                        Development Journey


                    </div>








                    <h2

                        className="
font-display
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-navy-950
leading-tight
"

                    >

                        Building A Stronger Future For

                        <span className="text-saffron-600">

                            {" "}Solapur

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

                        A journey dedicated towards education, social welfare,
                        infrastructure growth and empowering every citizen through
                        continuous development.

                    </p>







                </motion.div>









                {/* GRID */}



                <div

                    className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

                >



                    {

                        works.map((item, index) => {


                            const Icon = item.icon;



                            return (


                                <motion.div


                                    key={item.title}


                                    initial={{
                                        opacity: 0,
                                        y: 40
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


                                    whileHover={{
                                        y: -12
                                    }}



                                    className="
group
relative
overflow-hidden

rounded-[2rem]

bg-white/80
backdrop-blur-xl

border
border-white

shadow-[0_15px_45px_rgba(0,0,0,.08)]

hover:shadow-[0_25px_70px_rgba(0,0,0,.15)]

transition-all
duration-500
"

                                >







                                    <div

                                        className="
relative
h-56
overflow-hidden
"

                                    >


                                        <Image

                                            src={item.image}

                                            alt={item.title}

                                            fill

                                            className="
object-cover
duration-700
group-hover:scale-110
"

                                        />



                                        <div

                                            className="
absolute
inset-0
bg-gradient-to-t
from-navy-950/70
via-transparent
to-transparent
"

                                        />






                                        <div

                                            className="
absolute
bottom-5
left-5

h-14
w-14

rounded-2xl

bg-white/90
backdrop-blur

flex
items-center
justify-center
"

                                        >


                                            <Icon

                                                size={28}

                                                className="
text-saffron-600
"

                                            />


                                        </div>






                                    </div>









                                    <div

                                        className="
p-7
"

                                    >





                                        <h3

                                            className="
text-xl
font-bold
text-navy-950
"

                                        >

                                            {item.title}

                                        </h3>








                                        <p

                                            className="
mt-4
text-sm
leading-7
text-navy-600
"

                                        >


                                            {item.desc}


                                        </p>










                                        <button

                                            className="
mt-7
inline-flex
items-center
gap-2

font-bold

text-saffron-600

group-hover:gap-4

transition-all
"

                                        >

                                            Explore More


                                            <ArrowRight size={17} />


                                        </button>







                                    </div>






                                </motion.div>


                            )


                        })


                    }




                </div>








            </div>





        </section>


    )


}