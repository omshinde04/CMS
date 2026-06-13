"use client";


import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";





export default function GalleryCard({

    item,
    open

}) {



    return (


        <motion.div


            initial={{
                opacity: 0,
                y: 25
            }}


            whileInView={{
                opacity: 1,
                y: 0
            }}


            viewport={{
                once: true
            }}


            transition={{
                duration: .45
            }}


            whileHover={{
                y: -6
            }}



            onClick={open}



            className="
            break-inside-avoid

            group

            cursor-pointer

            bg-white

            rounded-[26px]

            overflow-hidden

            border
            border-slate-100

            shadow-[0_8px_30px_rgba(15,23,42,.07)]

            hover:shadow-[0_25px_60px_rgba(15,23,42,.14)]

            transition-all

            duration-500
            "


        >







            {/* IMAGE */}


            <div

                className="
                relative

                overflow-hidden
                "

            >



                <img


                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${item.image}`}


                    alt={item.title}


                    className="
                    w-full

                    object-cover

                    transition-transform

                    duration-700

                    ease-out

                    group-hover:scale-105
                    "

                />








                {/* HOVER SHADE */}


                <div

                    className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-black/35

                    via-transparent

                    to-transparent


                    opacity-0

                    group-hover:opacity-100

                    transition

                    duration-500
                    "

                />








                {/* FLOAT CATEGORY */}


                <span

                    className="
                    absolute

                    left-5
                    top-5

                    translate-y-[-10px]

                    opacity-0

                    group-hover:opacity-100

                    group-hover:translate-y-0


                    rounded-full

                    bg-white/90

                    backdrop-blur-md

                    px-4
                    py-1.5

                    text-xs

                    font-bold

                    text-saffron-600


                    shadow-lg

                    transition-all

                    duration-500
                    "

                >


                    {item.category}


                </span>





            </div>











            {/* CONTENT */}


            <div

                className="
                p-6
                "

            >








                <div

                    className="
                    flex

                    items-center

                    justify-between

                    gap-4
                    "

                >








                    <h2


                        className="
                        relative

                        text-xl

                        font-black

                        text-navy-950

                        leading-snug

                        after:absolute

                        after:left-0

                        after:-bottom-2

                        after:h-[2px]

                        after:w-0

                        after:bg-saffron-500

                        group-hover:after:w-full

                        after:transition-all

                        after:duration-500
                        "

                    >


                        {item.title}


                    </h2>








                    <div

                        className="
                        h-9
                        w-9

                        rounded-full

                        bg-saffron-50

                        flex

                        items-center

                        justify-center

                        text-saffron-600


                        opacity-0

                        translate-x-3

                        group-hover:opacity-100

                        group-hover:translate-x-0


                        transition-all

                        duration-500
                        "

                    >


                        <ArrowUpRight size={17} />


                    </div>





                </div>





            </div>





        </motion.div>


    )


}