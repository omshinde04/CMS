"use client";


import Image from "next/image";

import {

    useState

} from "react";


import {

    motion,
    AnimatePresence

} from "framer-motion";


import {

    ArrowRight,
    X,
    CheckCircle2,
    BadgeCheck

} from "lucide-react";


import {

    projects

} from "@/data/projectsData";









export default function ProjectsPage() {


    const [active, setActive] = useState(null);



    return (

        <section className="bg-[#faf8f3] overflow-hidden">



            {/* HERO */}


            <div className="py-20 bg-white border-b">


                <div className="max-w-7xl mx-auto px-6">



                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        animate={{ opacity: 1, y: 0 }}

                        className="max-w-3xl"

                    >


                        <div className="
inline-flex
gap-2
items-center
text-saffron-600
font-bold
">


                            <BadgeCheck />


                            Development Initiatives


                        </div>



                        <h1 className="
mt-5
text-5xl
font-black
text-navy-950
">


                            Projects Creating


                            <span className="block text-saffron-600">

                                Real Social Impact

                            </span>


                        </h1>



                        <p className="
mt-5
text-navy-600
leading-8
">


                            Dedicated work towards society, education,
                            healthcare, environment and citizen welfare.


                        </p>



                    </motion.div>


                </div>


            </div>









            {/* CARDS */}


            <div className="
max-w-7xl
mx-auto
px-6
py-20
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


                {


                    projects.map((p, i) => {


                        const Icon = p.icon;



                        return (

                            <motion.div


                                key={p.title}


                                whileHover={{ y: -8 }}


                                className="
bg-white
rounded-[28px]
overflow-hidden
border
shadow-lg
"


                            >


                                <div className="relative h-56">


                                    <Image

                                        src={p.image}

                                        fill

                                        alt={p.title}

                                        className="object-cover"

                                    />


                                </div>



                                <div className="p-7">


                                    <Icon className="text-saffron-600" />



                                    <h2 className="
mt-5
text-2xl
font-bold
">

                                        {p.title}

                                    </h2>


                                    <p className="
mt-3
text-sm
leading-7
text-navy-600
">


                                        {p.short}


                                    </p>




                                    <button

                                        onClick={() => setActive(p)}

                                        className="
mt-6
flex
gap-2
items-center
font-bold
text-saffron-600
"

                                    >


                                        Explore Project


                                        <ArrowRight size={16} />


                                    </button>



                                </div>



                            </motion.div>

                        )


                    })

                }



            </div>









            {/* MODAL */}


            <AnimatePresence>


                {


                    active && (


                        <motion.div


                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}


                            className="
fixed
inset-0
z-50
bg-black/50
backdrop-blur
flex
items-center
justify-center
p-5
"


                        >


                            <motion.div

                                initial={{ scale: .9 }}

                                animate={{ scale: 1 }}

                                exit={{ scale: .9 }}


                                className="
bg-white
max-w-3xl
rounded-[30px]
overflow-hidden
relative
"


                            >


                                <button

                                    onClick={() => setActive(null)}

                                    className="
absolute
right-5
top-5
bg-white
rounded-full
p-2
z-10
"


                                >


                                    <X />


                                </button>



                                <div className="relative h-72">


                                    <Image

                                        src={active.image}

                                        fill

                                        alt={active.title}

                                        className="object-cover"

                                    />


                                </div>





                                <div className="p-8">



                                    <h2 className="
text-3xl
font-black
text-navy-950
">

                                        {active.title}

                                    </h2>



                                    <p className="
mt-5
whitespace-pre-line
leading-8
text-navy-600
">


                                        {active.desc}


                                    </p>




                                    <div className="mt-6 space-y-3">


                                        {


                                            active.impact.map(x => (


                                                <div

                                                    key={x}

                                                    className="
flex
gap-3
items-center
"


                                                >


                                                    <CheckCircle2 className="text-saffron-600" />


                                                    {x}


                                                </div>


                                            ))


                                        }



                                    </div>




                                </div>




                            </motion.div>


                        </motion.div>

                    )


                }



            </AnimatePresence>





        </section>


    )

}