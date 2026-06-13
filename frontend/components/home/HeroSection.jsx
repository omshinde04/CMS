"use client";


import Link from "next/link";

import {
    motion,
    AnimatePresence
} from "framer-motion";


import {
    useEffect,
    useState
} from "react";


import {

    ShieldCheck,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Award,
    Users,
    Landmark,
    HeartHandshake,
    Sparkles

} from "lucide-react";






const IMAGES = [

    "/Images/final-banner.jpg",
    "/Images/final-banner2.jpg",
    "/Images/final-banner3.jpg",

];






const stats = [

    {
        icon: Award,
        value: "25+",
        label: "Years Of Service"
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
    },

    {
        icon: HeartHandshake,
        value: "500+",
        label: "Social Initiatives"
    }

];








export default function HeroSection() {



    const [current, setCurrent] = useState(0);




    useEffect(() => {


        const timer = setInterval(() => {

            setCurrent(
                p =>
                    (p + 1) % IMAGES.length
            );


        }, 6500);



        return () => clearInterval(timer);


    }, []);





    const prev = () => {

        setCurrent(
            p =>
                (p - 1 + IMAGES.length) % IMAGES.length
        );

    };




    const next = () => {

        setCurrent(
            p =>
                (p + 1) % IMAGES.length
        );

    };








    return (


        <section

            className="
relative
h-[calc(100vh-85px)]
overflow-hidden
bg-navy-950
"

        >





            {/* ================= BACKGROUND ================= */}



            <AnimatePresence mode="wait">


                <motion.div

                    key={current}

                    initial={{
                        opacity: 0,
                        scale: 1.08
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    exit={{
                        opacity: 0
                    }}

                    transition={{
                        duration: 1.4,
                        ease: "easeInOut"
                    }}


                    className="
absolute
inset-0
"


                    style={{

                        backgroundImage: `url(${IMAGES[current]})`,

                        backgroundSize: "cover",

                        backgroundPosition: "center"

                    }}


                />


            </AnimatePresence>









            {/* CINEMATIC OVERLAY */}



            <div
                className="
absolute
inset-0
bg-gradient-to-r
from-navy-950/90
via-navy-950/40
to-transparent
"
            />



            <div
                className="
absolute
inset-0
bg-gradient-to-t
from-navy-950
via-transparent
to-transparent
"
            />









            {/* CONTENT */}



            <div

                className="
relative
z-10
max-w-7xl
mx-auto
h-full
px-6
flex
items-center
"

            >



                <motion.div


                    initial={{
                        opacity: 0,
                        y: 50
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: .9
                    }}


                    className="
max-w-2xl
"

                >






                    {/* BADGE */}


                    <div

                        className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-white/10
border
border-white/20
backdrop-blur-xl
text-saffron-400
font-semibold
shadow-xl
"

                    >


                        <Sparkles size={17} />


                        People Focused Leadership


                    </div>









                    <h1

                        className="
mt-8
font-display
text-5xl
md:text-7xl
font-bold
leading-tight
text-white
drop-shadow-xl
"

                    >

                        Subhash Sureshchandra
                        <br />

                        <span
                            className="
text-saffron-400
"
                        >
                            Deshmukh (Bapu)
                        </span>


                    </h1>









                    <p

                        className="
mt-6
max-w-xl
text-lg
leading-8
text-white/85
"

                    >


                        Current MLA of South Solapur Constituency and former
                        Cabinet Minister of Maharashtra, committed to public
                        service, development and the progress of Solapur.


                    </p>









                    {/* BUTTONS */}


                    <div

                        className="
mt-10
flex
flex-wrap
gap-5
"

                    >



                        <Link

                            href="/complaint"

                            className="
px-8
py-4
rounded-2xl
bg-saffron-500
text-white
font-bold
flex
items-center
gap-2
shadow-xl
hover:-translate-y-1
duration-300
"

                        >


                            <ShieldCheck size={18} />


                            Citizen Service


                        </Link>








                        <Link

                            href="/vision"


                            className="
px-8
py-4
rounded-2xl
bg-white/15
border
border-white/25
backdrop-blur-xl
text-white
font-bold
flex
items-center
gap-2
hover:bg-white/25
duration-300
"

                        >

                            Vision Solapur


                            <ArrowRight size={18} />


                        </Link>




                    </div>






                </motion.div>


            </div>











            {/* SLIDER BUTTONS */}



            <button

                onClick={prev}

                className="
absolute
z-20
left-6
top-1/2
-translate-y-1/2
h-12
w-12
rounded-full
bg-white/15
border
border-white/20
backdrop-blur-xl
text-white
flex
items-center
justify-center
hover:bg-saffron-500
transition
"

            >

                <ChevronLeft />

            </button>







            <button

                onClick={next}

                className="
absolute
z-20
right-6
top-1/2
-translate-y-1/2
h-12
w-12
rounded-full
bg-white/15
border
border-white/20
backdrop-blur-xl
text-white
flex
items-center
justify-center
hover:bg-saffron-500
transition
"

            >

                <ChevronRight />

            </button>









            {/* DOTS */}


            <div

                className="
absolute
bottom-28
left-1/2
-translate-x-1/2
z-20
flex
gap-3
"

            >


                {

                    IMAGES.map((_, i) => (


                        <button

                            key={i}

                            onClick={() => setCurrent(i)}

                            className={`
h-2
rounded-full
transition-all

${current === i
                                    ?
                                    "w-10 bg-saffron-400"
                                    :
                                    "w-2 bg-white/50"
                                }

`}

                        />


                    ))

                }


            </div>









            {/* PREMIUM STATS */}



            <div

                className="
absolute
bottom-0
left-0
right-0
z-20
bg-white/10
backdrop-blur-2xl
border-t
border-white/15
"

            >



                <div

                    className="
max-w-7xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
"

                >



                    {

                        stats.map((item, index) => {


                            const Icon = item.icon;


                            return (


                                <div

                                    key={index}

                                    className="
flex
gap-4
items-center
px-6
py-5
border-r
border-white/10
"

                                >


                                    <div

                                        className="
h-12
w-12
rounded-2xl
bg-saffron-500/20
flex
items-center
justify-center
"

                                    >


                                        <Icon className="text-saffron-400" />


                                    </div>



                                    <div>


                                        <h3 className="text-white text-2xl font-bold">

                                            {item.value}

                                        </h3>


                                        <p className="text-white/60 text-sm">

                                            {item.label}

                                        </p>


                                    </div>


                                </div>


                            )


                        })


                    }



                </div>


            </div>





        </section>


    )


}