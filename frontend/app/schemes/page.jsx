"use client";


import Image from "next/image";
import { useState } from "react";


import {

    motion,
    AnimatePresence

} from "framer-motion";


import {

    schemes,
    schemeNews

} from "@/data/schemesData";


import {

    ArrowRight,
    X,
    CheckCircle2,
    Newspaper,
    Landmark,
    Search,
    ShieldCheck

} from "lucide-react";











export default function SchemesPage() {



    const [active, setActive] = useState(null);






    return (


        <section

            className="
            min-h-screen
            bg-gradient-to-br
            from-white
            via-[#fffaf5]
            to-white
            overflow-hidden
            "

        >







            {/* HERO */}


            <div

                className="
                relative
                py-20
                sm:py-28
                bg-white
                border-b
                overflow-hidden
                "

            >



                <div

                    className="
                    absolute
                    -right-32
                    -top-32
                    h-96
                    w-96
                    bg-saffron-200/50
                    rounded-full
                    blur-[120px]
                    "

                />






                <div

                    className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-6
                    lg:px-8
                    "

                >


                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        className="
                        max-w-4xl
                        "

                    >






                        <div

                            className="
                            inline-flex
                            items-center
                            gap-3

                            bg-white

                            px-5
                            py-3

                            rounded-full

                            shadow-lg

                            text-saffron-600
                            font-bold
                            "

                        >


                            <Landmark size={20} />

                            Government Schemes Portal


                        </div>








                        <h1

                            className="
                            mt-8

                            text-4xl
                            sm:text-6xl

                            font-black

                            leading-tight

                            text-navy-950
                            "

                        >


                            Citizen Welfare


                            <span

                                className="
                                block
                                text-saffron-600
                                "

                            >

                                Development Schemes

                            </span>


                        </h1>








                        <p

                            className="
                            mt-6

                            max-w-3xl

                            text-lg

                            leading-8

                            text-navy-600
                            "

                        >


                            Explore government welfare schemes,
                            development initiatives and citizen
                            support programs designed for better tomorrow.


                        </p>



                    </motion.div>


                </div>



            </div>













            {/* SCHEMES */}


            <div

                className="
                max-w-7xl
                mx-auto

                px-5
                sm:px-6
                lg:px-8

                py-20
                "

            >




                <div

                    className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                    "

                >


                    {

                        schemes.map((item, index) => {


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
                                        delay: index * .07
                                    }}

                                    viewport={{
                                        once: true
                                    }}


                                    whileHover={{
                                        y: -8
                                    }}



                                    className="
                                    group

                                    bg-white

                                    rounded-[30px]

                                    overflow-hidden

                                    border

                                    shadow-sm

                                    hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]

                                    transition-all
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

                                            fill

                                            alt={item.title}

                                            className="
                                            object-cover

                                            group-hover:scale-110

                                            duration-700
                                            "

                                        />


                                    </div>









                                    <div className="p-7">



                                        <div

                                            className="
                                            h-14
                                            w-14

                                            rounded-2xl

                                            bg-saffron-50

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







                                        <p

                                            className="
                                            mt-5

                                            text-sm

                                            font-bold

                                            text-saffron-600
                                            "

                                        >

                                            {item.category}

                                        </p>







                                        <h2

                                            className="
                                            mt-3

                                            text-xl

                                            font-black

                                            text-navy-950
                                            "

                                        >

                                            {item.title}

                                        </h2>







                                        <p

                                            className="
                                            mt-4

                                            text-sm

                                            leading-7

                                            text-navy-600
                                            "

                                        >

                                            {item.short}


                                        </p>







                                        <button


                                            onClick={() => setActive(item)}


                                            className="
                                            mt-6

                                            flex

                                            items-center

                                            gap-2

                                            font-bold

                                            text-saffron-600

                                            group-hover:gap-4

                                            transition-all
                                            "

                                        >


                                            View Details


                                            <ArrowRight size={17} />


                                        </button>



                                    </div>



                                </motion.div>



                            )

                        })


                    }


                </div>



            </div>













            {/* NEWS */}


            <div

                className="
                max-w-7xl

                mx-auto

                px-5

                pb-24
                "

            >




                <h2

                    className="
                    text-3xl

                    font-black

                    text-navy-950

                    mb-8
                    "

                >

                    Latest Scheme Updates


                </h2>






                <div

                    className="
                    grid
                    md:grid-cols-3
                    gap-6
                    "

                >


                    {


                        schemeNews.map((n) => (



                            <div


                                key={n.title}


                                className="
                                bg-white

                                rounded-3xl

                                border

                                p-7

                                shadow-sm
                                "

                            >


                                <Newspaper

                                    className="
                                    text-saffron-600
                                    "

                                />



                                <h3

                                    className="
                                    mt-5

                                    font-bold

                                    text-navy-950
                                    "

                                >

                                    {n.title}


                                </h3>




                                <p

                                    className="
                                    mt-3

                                    text-sm

                                    text-navy-500
                                    "

                                >

                                    {n.source} • {n.date}


                                </p>


                            </div>



                        ))


                    }



                </div>



            </div>














            {/* PREMIUM MODAL */}



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


                        onClick={() => setActive(null)}



                        className="
                        fixed

                        inset-0

                        z-[999]

                        bg-black/60

                        backdrop-blur-sm

                        flex

                        items-center
                        justify-center

                        p-4
                        "


                    >








                        <motion.div


                            initial={{
                                scale: .85,
                                opacity: 0
                            }}

                            animate={{
                                scale: 1,
                                opacity: 1
                            }}

                            exit={{
                                scale: .85,
                                opacity: 0
                            }}


                            onClick={(e) => e.stopPropagation()}



                            className="
                            relative

                            bg-white

                            w-full

                            max-w-4xl

                            rounded-[32px]

                            overflow-hidden

                            shadow-2xl

                            max-h-[90vh]

                            overflow-y-auto
                            "


                        >







                            {/* CLOSE BUTTON */}


                            <button


                                onClick={() => setActive(null)}


                                className="
                                absolute

                                right-5
                                top-5

                                z-20

                                h-11
                                w-11

                                rounded-full

                                bg-white

                                shadow-xl

                                flex
                                items-center
                                justify-center

                                hover:rotate-90

                                transition
                                "

                            >


                                <X size={22} />


                            </button>










                            <div

                                className="
                                relative
                                h-72
                                "

                            >


                                <Image

                                    src={active.image}

                                    fill

                                    alt={active.title}

                                    className="
                                    object-cover
                                    "

                                />


                            </div>









                            <div

                                className="
                                p-8
                                sm:p-10
                                "

                            >



                                <div

                                    className="
                                    flex
                                    gap-3
                                    text-saffron-600
                                    font-bold
                                    "

                                >


                                    <ShieldCheck />

                                    {active.category}


                                </div>






                                <h2

                                    className="
                                    mt-5

                                    text-3xl

                                    font-black

                                    text-navy-950
                                    "

                                >

                                    {active.title}


                                </h2>






                                <p

                                    className="
                                    mt-5

                                    whitespace-pre-line

                                    leading-8

                                    text-navy-600
                                    "

                                >

                                    {active.description}


                                </p>








                                <div

                                    className="
                                    mt-8

                                    grid
                                    sm:grid-cols-2

                                    gap-4
                                    "

                                >


                                    {


                                        active.benefits.map((x) => (


                                            <div

                                                key={x}

                                                className="
                                                flex
                                                gap-3

                                                bg-saffron-50

                                                rounded-xl

                                                p-4

                                                font-medium
                                                "

                                            >


                                                <CheckCircle2

                                                    className="
                                                    text-saffron-600
                                                    "

                                                />


                                                {x}


                                            </div>


                                        ))


                                    }



                                </div>



                            </div>



                        </motion.div>



                    </motion.div>


                }



            </AnimatePresence>




        </section>


    )

}