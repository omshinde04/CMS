"use client";


import {

    AnimatePresence,
    motion

} from "framer-motion";


import {

    X,
    Camera,
    CalendarDays

} from "lucide-react";








export default function GalleryModal({

    active,
    close

}) {




    return (


        <AnimatePresence>


            {

                active &&



                <motion.div



                    initial={{
                        opacity: 0
                    }}


                    animate={{
                        opacity: 1
                    }}


                    exit={{
                        opacity: 0
                    }}



                    transition={{
                        duration: .25
                    }}



                    onClick={close}



                    className="
                    fixed

                    inset-0

                    z-[999]

                    bg-black/70

                    backdrop-blur-md

                    flex

                    items-center
                    justify-center

                    p-4
                    "


                >







                    {/* MODAL CARD */}



                    <motion.div



                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: .9
                        }}


                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}


                        exit={{
                            opacity: 0,
                            y: 40,
                            scale: .9
                        }}


                        transition={{
                            duration: .35,
                            ease: "easeOut"
                        }}



                        onClick={(e) => e.stopPropagation()}



                        className="
                        relative

                        bg-white

                        w-full

                        max-w-5xl

                        rounded-[32px]

                        overflow-hidden

                        shadow-[0_40px_120px_rgba(0,0,0,.35)]

                        grid
                        lg:grid-cols-[1.2fr_.8fr]

                        max-h-[90vh]
                        "


                    >








                        {/* CLOSE */}


                        <button


                            onClick={close}



                            className="
                            absolute

                            right-5
                            top-5

                            z-30

                            h-12
                            w-12

                            rounded-full

                            bg-white/90

                            backdrop-blur-xl

                            shadow-xl

                            flex

                            items-center
                            justify-center


                            hover:rotate-90

                            hover:bg-saffron-500

                            hover:text-white

                            transition-all

                            duration-300
                            "

                        >


                            <X size={22} />


                        </button>












                        {/* IMAGE SIDE */}


                        <div

                            className="
                            relative

                            bg-slate-100

                            overflow-hidden
                            "

                        >




                            <img


                                src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${active.image}`}


                                alt={active.title}



                                className="
                                w-full

                                h-full

                                max-h-[90vh]

                                object-contain

                                transition

                                duration-700

                                hover:scale-105
                                "


                            />





                            <div

                                className="
                                absolute

                                inset-x-0

                                bottom-0

                                h-40

                                bg-gradient-to-t

                                from-black/50

                                to-transparent
                                "

                            />



                        </div>














                        {/* CONTENT SIDE */}



                        <div

                            className="
                            p-7
                            sm:p-10

                            overflow-y-auto
                            "

                        >







                            <div

                                className="
                                inline-flex

                                items-center

                                gap-2

                                rounded-full

                                bg-saffron-50

                                px-4

                                py-2

                                text-sm

                                font-bold

                                text-saffron-600
                                "

                            >


                                <Camera size={16} />


                                {

                                    active.category ||
                                    "Gallery Moment"

                                }


                            </div>









                            <h2

                                className="
                                mt-6

                                text-3xl

                                font-black

                                leading-tight

                                text-navy-950
                                "

                            >


                                {active.title}


                            </h2>










                            <p

                                className="
                                mt-5

                                text-navy-600

                                leading-8
                                "

                            >


                                {

                                    active.description ||

                                    `A memorable moment representing public service,
                                    development initiatives and citizen connection.`

                                }


                            </p>









                            <div

                                className="
                                mt-8

                                rounded-2xl

                                bg-gradient-to-br

                                from-saffron-50

                                to-white

                                border

                                p-5
                                "

                            >




                                <div

                                    className="
                                    flex

                                    items-center

                                    gap-3

                                    text-navy-700

                                    font-semibold
                                    "

                                >


                                    <CalendarDays

                                        className="
                                        text-saffron-600
                                        "

                                    />



                                    Public Service Memory


                                </div>





                                <p

                                    className="
                                    mt-3

                                    text-sm

                                    leading-7

                                    text-navy-500
                                    "

                                >

                                    Capturing important activities,
                                    community interaction and development
                                    journey.


                                </p>





                            </div>






                        </div>






                    </motion.div>



                </motion.div>


            }



        </AnimatePresence>


    )


}