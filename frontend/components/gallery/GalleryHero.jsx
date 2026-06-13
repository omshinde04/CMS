"use client";


import { motion } from "framer-motion";

import { Camera } from "lucide-react";



export default function GalleryHero() {


    return (

        <div
            className="
relative
bg-white
py-20
border-b
overflow-hidden
"
        >


            <div
                className="
absolute
right-0
top-0
h-96
w-96
bg-saffron-200/40
blur-[120px]
rounded-full
"
            />



            <div
                className="
relative
max-w-7xl
mx-auto
px-6
"
            >


                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                    className="
max-w-3xl
"

                >


                    <div
                        className="
inline-flex
items-center
gap-3
text-saffron-600
font-bold
"
                    >

                        <Camera />

                        Leadership Gallery

                    </div>



                    <h1
                        className="
mt-6
text-5xl
md:text-7xl
font-black
text-navy-950
"
                    >

                        Moments Of

                        <span
                            className="
block
text-saffron-600
"
                        >
                            Public Service
                        </span>


                    </h1>



                    <p
                        className="
mt-6
text-lg
leading-8
text-navy-600
"
                    >

                        Explore development activities, public meetings,
                        social initiatives and memorable moments with citizens.

                    </p>



                </motion.div>


            </div>


        </div>

    )

}