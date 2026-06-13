"use client";


import {

    useEffect,
    useState

} from "react";


import {

    useParams,
    useRouter

} from "next/navigation";


import { motion } from "framer-motion";


import {

    Loader2,
    CalendarDays,
    ArrowLeft,
    Newspaper,
    Clock,
    Share2

} from "lucide-react";


import {

    publicBlogService

} from "@/services/public/publicBlogService";








export default function BlogDetails() {


    const { slug } = useParams();


    const router = useRouter();



    const [blog, setBlog] = useState(null);


    const [loading, setLoading] = useState(true);






    useEffect(() => {


        loadBlog();


    }, [slug]);







    const loadBlog = async () => {


        try {


            const res =
                await publicBlogService.getBySlug(slug);



            setBlog(res.blog);



        }


        catch (error) {


            console.log(error);


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
                items-center
                justify-center
                bg-[#faf8f3]
                "
            >

                <Loader2
                    size={45}
                    className="
                    animate-spin
                    text-saffron-600
                    "
                />

            </div>

        );









    if (!blog)

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

                <Newspaper
                    size={80}
                    className="text-gray-300"
                />


                <h1
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    "
                >

                    Blog Not Found

                </h1>


            </div>

        );










    return (


        <main

            className="
            min-h-screen

            bg-[#faf8f3]

            py-10
            sm:py-14

            px-4
            "

        >









            <div

                className="
                max-w-5xl
                mx-auto
                "

            >







                {/* BACK */}


                <button


                    onClick={() => router.back()}


                    className="
                    mb-8

                    inline-flex
                    items-center

                    gap-3

                    rounded-full

                    bg-white

                    border

                    px-5
                    py-3

                    text-sm

                    font-semibold

                    text-slate-700

                    hover:shadow-lg

                    transition
                    "

                >


                    <ArrowLeft size={18} />


                    Back


                </button>












                <motion.article


                    initial={{
                        opacity: 0,
                        y: 30
                    }}


                    animate={{
                        opacity: 1,
                        y: 0
                    }}


                    className="
                    bg-white

                    rounded-[28px]

                    overflow-hidden

                    border

                    shadow-[0_20px_60px_rgba(15,23,42,.08)]
                    "

                >









                    {/* IMAGE */}


                    {

                        blog.image &&


                        <div

                            className="
                            relative

                            bg-slate-100

                            h-[260px]
                            sm:h-[360px]
                            lg:h-[460px]

                            overflow-hidden
                            "

                        >


                            <img


                                src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${blog.image}`}


                                alt={blog.title}


                                className="
                                w-full
                                h-full

                                object-cover
                                "

                            />


                        </div>


                    }









                    {/* CONTENT */}



                    <div

                        className="
                        px-6
                        sm:px-10
                        lg:px-14

                        py-10
                        "

                    >








                        {/* META */}


                        <div

                            className="
                            flex
                            flex-wrap

                            gap-5

                            text-sm

                            text-gray-500
                            "

                        >



                            <span

                                className="
                                flex
                                items-center
                                gap-2
                                "

                            >


                                <CalendarDays size={16} />


                                {

                                    new Date(
                                        blog.created_at
                                    )
                                        .toLocaleDateString(

                                            "en-IN",

                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            }

                                        )

                                }


                            </span>





                            <span

                                className="
                                flex
                                items-center
                                gap-2
                                "

                            >

                                <Clock size={16} />


                                5 min read


                            </span>



                        </div>











                        {/* TITLE */}


                        <h1

                            className="
                            mt-6

                            max-w-4xl

                            text-3xl
                            sm:text-4xl
                            lg:text-5xl

                            font-black

                            leading-tight

                            text-navy-950
                            "

                        >


                            {blog.title}


                        </h1>









                        {/* DIVIDER */}


                        <div

                            className="
                            mt-8

                            h-px

                            bg-gradient-to-r

                            from-saffron-400

                            to-transparent
                            "

                        />









                        {/* BLOG CONTENT */}


                        <div

                            className="
                            mt-8

                            prose
                            prose-lg

                            max-w-none

                            leading-9

                            text-slate-700

                            whitespace-pre-line
                            "

                        >


                            {blog.content}


                        </div>









                        {/* FOOTER */}


                        <div

                            className="
                            mt-12

                            pt-7

                            border-t

                            flex
                            justify-between
                            items-center
                            "

                        >



                            <p

                                className="
                                text-sm

                                font-medium

                                text-gray-500
                                "

                            >

                                Published Article


                            </p>





                            <button

                                className="
                                h-11
                                w-11

                                rounded-full

                                bg-saffron-500

                                text-white

                                flex
                                items-center
                                justify-center

                                shadow-lg
                                "

                            >


                                <Share2 size={18} />


                            </button>



                        </div>








                    </div>






                </motion.article>






            </div>






        </main>


    )


}