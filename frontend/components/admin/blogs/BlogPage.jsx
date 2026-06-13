"use client";


import {
    useEffect,
    useState
} from "react";


import { motion } from "framer-motion";


import {
    Newspaper,
    Upload,
    Trash2,
    Loader2,
    FileText,
    Pencil,
    X,
    ImagePlus
} from "lucide-react";


import { blogService } from "@/services/blogService";






export default function BlogPage() {



    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [editing, setEditing] = useState(null);

    const [preview, setPreview] = useState(null);



    const [form, setForm] = useState({

        title: "",
        slug: "",
        content: "",
        image: null

    });







    useEffect(() => {

        loadBlogs();

    }, []);








    const loadBlogs = async () => {


        try {


            const res =
                await blogService.getAll();


            setBlogs(
                res.blogs || []
            );


        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }


    };










    const saveBlog = async (e) => {


        e.preventDefault();



        try {


            setSaving(true);



            const data = new FormData();



            data.append(
                "title",
                form.title
            );


            data.append(
                "slug",
                form.slug
            );


            data.append(
                "content",
                form.content
            );



            if (form.image) {

                data.append(
                    "image",
                    form.image
                );

            }




            if (editing) {


                await blogService.update(
                    editing,
                    data
                );


            }

            else {


                await blogService.create(
                    data
                );


            }





            resetForm();


            loadBlogs();



        }

        catch (err) {


            alert(
                err.response?.data?.message ||
                "Operation failed"
            );


        }

        finally {

            setSaving(false);

        }



    };










    const editBlog = (blog) => {


        setEditing(blog.id);



        setPreview(

            blog.image

                ?

                `${process.env.NEXT_PUBLIC_UPLOAD_URL}/${blog.image}`

                :

                null

        );




        setForm({

            title: blog.title,

            slug: blog.slug,

            content: blog.content,

            image: null

        });


    };










    const resetForm = () => {


        setEditing(null);

        setPreview(null);



        setForm({

            title: "",
            slug: "",
            content: "",
            image: null

        });


    };









    const deleteBlog = async (id) => {


        if (!confirm("Delete this blog?"))
            return;



        await blogService.delete(id);


        loadBlogs();


    };










    if (loading)

        return (

            <div className="h-[70vh] flex items-center justify-center">

                <Loader2 className="animate-spin text-orange-500" />

            </div>

        );










    return (

        <section className="p-6 space-y-8 bg-slate-50 min-h-screen">









            {/* HEADER */}


            <div className="flex justify-between items-center">


                <div>

                    <h1 className="text-4xl font-black">

                        Blog Center

                    </h1>


                    <p className="text-gray-500">

                        Manage news, updates & articles

                    </p>


                </div>




                <div className="
bg-white
shadow
rounded-2xl
px-6
py-3
font-bold
">

                    {blogs.length} Blogs

                </div>


            </div>










            {/* FORM */}



            <form

                onSubmit={saveBlog}

                className="
bg-white
rounded-[2rem]
shadow-xl
border
p-8
space-y-5
"

            >




                <div className="flex justify-between">


                    <div className="flex gap-4 items-center">


                        <div className="
h-14
w-14
rounded-2xl
bg-slate-950
text-white
flex
items-center
justify-center
">

                            <Newspaper />

                        </div>




                        <div>


                            <h2 className="text-2xl font-bold">

                                {
                                    editing
                                        ?
                                        "Update Blog"
                                        :
                                        "Create Blog"
                                }

                            </h2>


                            <p className="text-gray-500">

                                CMS Editor

                            </p>


                        </div>


                    </div>




                    {
                        editing &&

                        <button
                            type="button"
                            onClick={resetForm}
                        >

                            <X />

                        </button>

                    }


                </div>









                <div className="grid md:grid-cols-2 gap-5">


                    <input

                        placeholder="Blog Title"

                        value={form.title}

                        onChange={(e) =>

                            setForm({
                                ...form,
                                title: e.target.value
                            })

                        }

                        className="
border
rounded-2xl
px-5
py-4
outline-none
"

                    />





                    <input

                        placeholder="Slug"

                        value={form.slug}

                        onChange={(e) =>

                            setForm({
                                ...form,
                                slug: e.target.value
                            })

                        }

                        className="
border
rounded-2xl
px-5
py-4
outline-none
"

                    />


                </div>








                <textarea

                    placeholder="Content"

                    value={form.content}

                    onChange={(e) =>

                        setForm({
                            ...form,
                            content: e.target.value
                        })

                    }

                    className="
border
rounded-2xl
p-5
w-full
min-h-36
outline-none
"

                />









                {/* IMAGE UPLOAD */}



                <div className="space-y-5">



                    <label

                        className="
cursor-pointer
border-2
border-dashed
rounded-2xl
p-6
flex
items-center
gap-4
hover:border-orange-400
transition
"

                    >


                        <ImagePlus className="text-orange-500" />


                        <div>


                            <p className="font-bold">

                                Choose Image

                            </p>


                            <p className="text-sm text-gray-400">

                                Preview before publishing

                            </p>


                        </div>




                        <input

                            hidden

                            type="file"

                            accept="image/*"

                            onChange={(e) => {


                                const file =
                                    e.target.files[0];


                                if (!file) return;



                                setForm({

                                    ...form,

                                    image: file

                                });



                                setPreview(

                                    URL.createObjectURL(file)

                                );


                            }}

                        />



                    </label>









                    {/* PREVIEW */}


                    {

                        preview &&


                        <motion.div

                            initial={{
                                opacity: 0,
                                scale: .95
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1
                            }}

                            className="
relative
w-full
max-w-lg
rounded-[2rem]
overflow-hidden
shadow-xl
"

                        >



                            <img

                                src={preview}

                                className="
h-72
w-full
object-cover
"

                            />





                            <button

                                type="button"

                                onClick={() => {


                                    setPreview(null);


                                    setForm({

                                        ...form,

                                        image: null

                                    });


                                }}

                                className="
absolute
top-4
right-4
bg-black/70
text-white
rounded-full
p-2
"

                            >

                                <X size={18} />

                            </button>



                        </motion.div>

                    }


                </div>









                <button

                    disabled={saving}

                    className="
bg-slate-950
text-white
rounded-xl
px-10
py-4
font-bold
flex
gap-3
"

                >


                    <Upload />


                    {

                        saving

                            ?

                            "Saving..."

                            :

                            editing

                                ?

                                "Update Blog"

                                :

                                "Publish Blog"

                    }


                </button>




            </form>









            {/* BLOGS */}



            <div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">


                {


                    blogs.map((blog, index) => (



                        <motion.div

                            key={blog.id}

                            initial={{ opacity: 0, y: 30 }}

                            animate={{ opacity: 1, y: 0 }}

                            transition={{ delay: index * .05 }}

                            className="
bg-white
rounded-[2rem]
shadow-xl
overflow-hidden
"

                        >



                            <div className="h-52 bg-gray-100">


                                {

                                    blog.image ?

                                        <img

                                            src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${blog.image}`}

                                            className="
h-full
w-full
object-cover
"

                                        />

                                        :

                                        <div className="h-full flex justify-center items-center">

                                            <FileText />

                                        </div>


                                }


                            </div>





                            <div className="p-6">


                                <h3 className="font-bold text-xl">

                                    {blog.title}

                                </h3>



                                <p className="text-gray-500 text-sm">

                                    {blog.slug}

                                </p>



                                <p className="mt-3 line-clamp-3">

                                    {blog.content}

                                </p>





                                <div className="flex gap-3 mt-6">


                                    <button

                                        onClick={() => editBlog(blog)}

                                        className="
flex-1
bg-blue-50
text-blue-600
rounded-xl
py-3
"

                                    >

                                        <Pencil className="mx-auto" />

                                    </button>





                                    <button

                                        onClick={() => deleteBlog(blog.id)}

                                        className="
flex-1
bg-red-50
text-red-600
rounded-xl
py-3
"

                                    >

                                        <Trash2 className="mx-auto" />

                                    </button>


                                </div>



                            </div>



                        </motion.div>


                    ))

                }


            </div>








            {

                blogs.length === 0 &&

                <div className="text-center py-20 text-gray-400">

                    <Newspaper size={70} className="mx-auto" />

                    No blogs available

                </div>

            }



        </section>

    )

}