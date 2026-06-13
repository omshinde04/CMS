"use client";


import {

    useEffect,
    useState

} from "react";


import {

    useRouter

} from "next/navigation";


import { motion } from "framer-motion";


import {

    Newspaper,
    Loader2,
    CalendarDays,
    ArrowRight

} from "lucide-react";


import {

    publicBlogService

} from "@/services/public/publicBlogService";









export default function BlogsPage() {


    const router = useRouter();



    const [blogs, setBlogs] =
        useState([]);



    const [loading, setLoading] =
        useState(true);









    useEffect(() => {


        loadBlogs();


    }, []);










    const loadBlogs = async () => {


        try {


            const res =
                await publicBlogService.getBlogs();



            console.log(
                "BLOG DATA",
                res
            );



            setBlogs(
                res.blogs || []
            );


        }


        catch (error) {


            console.log(
                "Blog Error",
                error
            );


        }


        finally {


            setLoading(false);


        }


    };









    if (loading)


        return (

            <div
                className="
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                "
            >

                <Loader2

                    size={45}

                    className="
                    animate-spin
                    text-orange-500
                    "

                />


                <p className="mt-5 text-gray-500">

                    Loading Blogs...

                </p>


            </div>

        );










    return (


        <section

            className="
            min-h-screen

            bg-gradient-to-br
            from-white
            via-orange-50
            to-slate-100

            px-5
            md:px-14

            py-20
            "

        >









            {/* HEADER */}



            <motion.div


                initial={{

                    opacity: 0,

                    y: -30

                }}


                animate={{

                    opacity: 1,

                    y: 0

                }}


                className="
                text-center
                max-w-4xl
                mx-auto
                "

            >



                <div

                    className="
                    mx-auto

                    h-20
                    w-20

                    rounded-[2rem]

                    bg-orange-500

                    text-white

                    flex
                    items-center
                    justify-center

                    shadow-xl
                    "

                >

                    <Newspaper size={40} />


                </div>





                <h1

                    className="
                    mt-8

                    text-5xl
                    md:text-7xl

                    font-black

                    text-slate-950
                    "

                >

                    Latest Updates

                </h1>





                <p

                    className="
                    mt-5

                    text-gray-500

                    text-lg
                    "

                >

                    Explore latest news, events and development work


                </p>




            </motion.div>









            {/* BLOG GRID */}



            <div

                className="
                mt-20

                grid

                md:grid-cols-2
                xl:grid-cols-3

                gap-10
                "

            >





                {

                    blogs.map((blog, index) => (



                        <motion.article


                            key={blog.id}


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


                            transition={{

                                delay: index * .05

                            }}



                            className="
                            group

                            bg-white

                            rounded-[2rem]

                            overflow-hidden

                            shadow-lg

                            hover:shadow-2xl

                            border

                            duration-500
                            "

                        >







                            {/* IMAGE */}



                            <div

                                className="
                                h-80

                                bg-slate-100

                                overflow-hidden

                                flex
                                items-center
                                justify-center
                                "

                            >



                                {

                                    blog.image ?

                                        <img


                                            src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${blog.image}`}


                                            alt={blog.title}


                                            className="
                                        h-full
                                        w-full

                                        object-cover

                                        group-hover:scale-110

                                        transition

                                        duration-700
                                        "

                                        />


                                        :

                                        <Newspaper

                                            size={70}

                                            className="
                                        text-gray-300
                                        "

                                        />

                                }



                            </div>









                            {/* CONTENT */}



                            <div className="p-7">





                                <div

                                    className="
                                    flex
                                    items-center

                                    gap-2

                                    text-gray-400

                                    text-sm
                                    "

                                >


                                    <CalendarDays size={16} />


                                    {

                                        new Date(
                                            blog.created_at
                                        )
                                            .toLocaleDateString()

                                    }



                                </div>









                                <h2

                                    className="
                                    mt-5

                                    text-2xl

                                    font-black

                                    text-slate-900

                                    line-clamp-2
                                    "

                                >

                                    {blog.title}


                                </h2>









                                <p

                                    className="
                                    mt-4

                                    text-gray-600

                                    line-clamp-3
                                    "

                                >

                                    {blog.content}

                                </p>










                                <button


                                    onClick={() => {


                                        router.push(

                                            `/blogs/${blog.slug}`

                                        )


                                    }}



                                    className="
                                    mt-8

                                    flex
                                    items-center

                                    gap-2

                                    font-bold

                                    text-orange-600

                                    hover:gap-5

                                    transition-all
                                    "

                                >



                                    Read More


                                    <ArrowRight size={18} />


                                </button>






                            </div>




                        </motion.article>


                    ))

                }




            </div>









            {/* EMPTY */}


            {

                blogs.length === 0 &&


                <div

                    className="
                    mt-24

                    bg-white

                    rounded-[3rem]

                    shadow-xl

                    p-16

                    text-center
                    "

                >



                    <Newspaper

                        size={80}

                        className="
                        mx-auto
                        text-gray-300
                        "

                    />



                    <h2

                        className="
                        mt-5

                        text-2xl

                        font-bold
                        "

                    >

                        No Blogs Available


                    </h2>



                </div>

            }




        </section>


    )


}