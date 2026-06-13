"use client";


import {

    useEffect,
    useState

} from "react";


import { motion } from "framer-motion";


import {

    ImagePlus,
    Upload,
    Trash2,
    Loader2,
    Images,
    X,
    ShieldCheck

} from "lucide-react";


import { galleryService } from "@/services/galleryService";







export default function GalleryPage() {



    const [gallery, setGallery] =
        useState([]);


    const [loading, setLoading] =
        useState(true);


    const [uploading, setUploading] =
        useState(false);


    const [preview, setPreview] =
        useState(null);




    const [form, setForm] =
        useState({

            title: "",

            category: "",

            image: null

        });








    useEffect(() => {

        loadGallery();

    }, []);









    const loadGallery = async () => {


        try {


            const res =
                await galleryService.getAll();


            setGallery(
                res.gallery || []
            );


        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }


    };











    const uploadImage = async (e) => {


        e.preventDefault();



        try {


            setUploading(true);



            const data =
                new FormData();



            data.append(
                "title",
                form.title
            );


            data.append(
                "category",
                form.category
            );


            data.append(
                "image",
                form.image
            );





            await galleryService.upload(
                data
            );




            setForm({

                title: "",

                category: "",

                image: null

            });



            setPreview(null);



            loadGallery();



        }

        catch (err) {


            alert(

                err.response?.data?.message ||

                "Upload failed"

            );


        }

        finally {

            setUploading(false);

        }


    };









    const removeImage = async (id) => {


        if (!confirm("Delete image?"))
            return;



        await galleryService.delete(id);


        loadGallery();


    };









    if (loading)

        return (

            <div className="h-[70vh] flex justify-center items-center">

                <Loader2 className="animate-spin text-orange-500" />

            </div>

        );










    return (

        <section

            className="
p-6
space-y-7
min-h-screen
bg-gradient-to-br
from-slate-50
to-orange-50/40
"

        >








            {/* HEADER */}



            <div

                className="
rounded-[2rem]
bg-gradient-to-r
from-slate-950
to-slate-800
text-white
p-7
flex
justify-between
items-center
shadow-xl
"

            >



                <div>


                    <h1 className="text-3xl font-black">

                        Gallery Management

                    </h1>


                    <p className="text-white/60 mt-2">

                        Manage public events, media and memories

                    </p>


                </div>






                <div

                    className="
hidden
md:flex
gap-3
items-center
bg-white/10
px-5
py-3
rounded-2xl
"

                >


                    <Images />


                    {gallery.length} Photos


                </div>



            </div>










            {/* UPLOAD */}



            <form

                onSubmit={uploadImage}

                className="
bg-white
rounded-[2rem]
shadow-xl
border
p-7
space-y-6
"

            >





                <div className="flex items-center gap-3">


                    <div

                        className="
h-14
w-14
rounded-2xl
bg-orange-50
text-orange-500
flex
items-center
justify-center
"

                    >

                        <ImagePlus />

                    </div>


                    <div>


                        <h2 className="text-xl font-bold">

                            Upload New Image

                        </h2>


                        <p className="text-gray-500 text-sm">

                            Add image to public gallery

                        </p>


                    </div>


                </div>









                <div

                    className="
grid
md:grid-cols-2
gap-5
"

                >


                    <input

                        placeholder="Image Title"

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

                        placeholder="Category"

                        value={form.category}

                        onChange={(e) =>

                            setForm({

                                ...form,

                                category: e.target.value

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









                {/* IMAGE PICKER */}



                <label

                    className="
cursor-pointer
border-2
border-dashed
rounded-[2rem]
p-8
flex
items-center
justify-center
gap-4
hover:border-orange-400
transition
bg-slate-50
"

                >


                    <ImagePlus className="text-orange-500" />


                    <span className="font-bold">

                        Choose Gallery Image

                    </span>





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









                <button

                    disabled={uploading}

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

                        uploading

                            ?

                            "Uploading..."

                            :

                            "Upload Image"

                    }


                </button>



            </form>









            {/* GRID */}



            <div

                className="
grid
sm:grid-cols-2
xl:grid-cols-4
gap-6
"

            >


                {

                    gallery.map((item, index) => (



                        <motion.div

                            key={item.id}

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: index * .04
                            }}

                            className="
group
bg-white
rounded-[2rem]
overflow-hidden
shadow-lg
border
"

                        >



                            <div

                                className="
relative
h-60
overflow-hidden
"

                            >


                                <img

                                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${item.image}`}

                                    className="
h-full
w-full
object-cover
group-hover:scale-110
transition
duration-500
"

                                />



                            </div>








                            <div className="p-5">


                                <div className="flex justify-between">


                                    <div>


                                        <h3 className="font-bold">

                                            {item.title}

                                        </h3>


                                        <p className="text-sm text-gray-500">

                                            {item.category}

                                        </p>


                                    </div>





                                    <button

                                        onClick={() => removeImage(item.id)}

                                        className="
h-11
w-11
rounded-xl
bg-red-50
text-red-600
flex
items-center
justify-center
"

                                    >

                                        <Trash2 size={18} />

                                    </button>


                                </div>


                            </div>



                        </motion.div>


                    ))

                }



            </div>









            {

                gallery.length === 0 &&


                <div className="text-center py-20 text-gray-400">

                    <Images size={70} className="mx-auto" />

                    No gallery images uploaded

                </div>


            }






        </section>


    )

}