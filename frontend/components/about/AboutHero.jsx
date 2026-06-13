"use client";


import Image from "next/image";

import { motion } from "framer-motion";


import {

    Award,
    MapPin,
    Users,
    Landmark,
    Sparkles,
    CheckCircle2

} from "lucide-react";







const highlights = [

    "Current MLA — South Solapur Constituency",

    "Former Cabinet Minister of Maharashtra",

    "25+ Years Dedicated Public Service"

];





const stats = [

    {
        icon: Award,
        value: "25+",
        label: "Years Service"
    },


    {
        icon: Landmark,
        value: "MLA",
        label: "South Solapur"
    },


    {
        icon: Users,
        value: "1L+",
        label: "People Connected"
    }

];










export default function AboutHero() {


    return (

        <section

            className="
relative
overflow-hidden

min-h-[calc(100vh-85px)]

flex
items-center

bg-gradient-to-br
from-white
via-saffron-50/40
to-white

py-12
lg:py-0
"

        >







            {/* BACKGROUND */}


            <div
                className="
absolute
-top-20
-right-20

h-[450px]
w-[450px]

rounded-full

bg-saffron-300/30

blur-[130px]
"
            />



            <div
                className="
absolute
bottom-0
-left-32

h-[400px]
w-[400px]

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

w-full
"

            >





                <div

                    className="
grid
grid-cols-1
lg:grid-cols-2

gap-12
lg:gap-20

items-center
"

                >








                    {/* LEFT */}



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

shadow-lg

text-saffron-600

font-bold
text-sm
"

                        >


                            <Sparkles size={16} />


                            About The Leader


                        </div>










                        <h1

                            className="
mt-6

font-display

text-4xl
sm:text-5xl
xl:text-6xl

leading-[1.05]

font-black

text-navy-950
"

                        >

                            Shri Subhash

                            <br />

                            Sureshchandra

                            <span

                                className="
block

text-saffron-600
"

                            >

                                Deshmukh (Bapu)

                            </span>


                        </h1>










                        <div

                            className="
mt-5

flex
items-center

gap-3

font-semibold

text-navy-600
"

                        >


                            <MapPin

                                size={20}

                                className="
text-saffron-500
"

                            />


                            Solapur • Maharashtra


                        </div>










                        <p

                            className="
mt-6

max-w-xl

text-base
lg:text-lg

leading-8

text-navy-600
"

                        >

                            A visionary public representative committed to
                            Solapur's development, education, cooperative movement
                            and people focused governance.


                        </p>











                        <div

                            className="
mt-7

space-y-3
"

                        >


                            {

                                highlights.map((item, index) => (


                                    <div

                                        key={index}

                                        className="
flex
items-center
gap-3

font-medium

text-navy-700
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











                        {/* STATS */}


                        <div

                            className="
mt-8

grid
grid-cols-3

gap-4
"

                        >


                            {


                                stats.map((item, index) => {


                                    const Icon = item.icon;



                                    return (


                                        <div

                                            key={index}

                                            className="
rounded-2xl

bg-white/80

backdrop-blur

border
border-saffron-100

p-4

shadow-lg
"

                                        >


                                            <Icon

                                                size={22}

                                                className="
text-saffron-500
"

                                            />


                                            <h3

                                                className="
mt-2

text-2xl

font-black

text-navy-950
"

                                            >

                                                {item.value}

                                            </h3>



                                            <p

                                                className="
text-xs

text-navy-500
"

                                            >

                                                {item.label}

                                            </p>




                                        </div>


                                    )


                                })


                            }



                        </div>








                    </motion.div>












                    {/* IMAGE SIDE */}


                    <motion.div


                        initial={{
                            opacity: 0,
                            scale: .95
                        }}


                        animate={{
                            opacity: 1,
                            scale: 1
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
absolute

hidden
lg:block

-inset-5

rotate-3

rounded-[40px]

bg-gradient-to-br
from-saffron-400
to-yellow-200
"

                        />









                        <div

                            className="
relative

overflow-hidden

rounded-[35px]

border-[8px]
border-white

shadow-[0_35px_90px_rgba(0,0,0,.20)]
"

                        >





                            <Image

                                src="/Images/subhash-deshmukh-about.jpg"

                                alt="Subhash Deshmukh"

                                width={700}

                                height={750}

                                priority

                                className="
w-full

h-[420px]
sm:h-[520px]
lg:h-[560px]

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

p-6

bg-gradient-to-t
from-navy-950
via-navy-950/70
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

                                    Leadership With Commitment

                                </h3>



                                <p

                                    className="
text-white/70
text-sm
"

                                >

                                    Service • Development • Progress

                                </p>



                            </div>








                        </div>






                    </motion.div>







                </div>






            </div>





        </section>

    )


}