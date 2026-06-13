"use client";


import { useState } from "react";

import { motion } from "framer-motion";


import {

    Upload,
    Send,
    CheckCircle2,
    Loader2,
    FileImage,
    ShieldCheck

} from "lucide-react";


import {

    publicComplaintService

} from "@/services/public/publicComplaintService";








export default function ComplaintPage() {



    const [loading, setLoading] =
        useState(false);


    const [tracking, setTracking] =
        useState(null);



    const [form, setForm] =
        useState({

            citizen_name: "",
            phone: "",
            email: "",
            category: "",
            title: "",
            description: "",
            images: []

        });








    const submitComplaint = async (e) => {


        e.preventDefault();


        try {


            setLoading(true);



            const data =
                new FormData();



            Object.keys(form)
                .forEach(key => {


                    if (key !== "images") {


                        data.append(
                            key,
                            form[key]
                        );


                    }


                });





            form.images.forEach(img => {


                data.append(
                    "images",
                    img
                );


            });








            const res =
                await publicComplaintService.create(
                    data
                );





            setTracking(
                res.trackingId
            );




            setForm({

                citizen_name: "",
                phone: "",
                email: "",
                category: "",
                title: "",
                description: "",
                images: []

            });






        }


        catch (error) {


            console.log(
                "COMPLAINT ERROR",
                error.response?.data || error
            );


            alert(
                error.response?.data?.message ||
                error.message
            );


        }

        finally {


            setLoading(false);


        }


    };









    return (


        <section

            className="
min-h-screen
bg-gradient-to-br
from-orange-50
via-white
to-slate-100
px-5
py-20
"

        >







            <div

                className="
max-w-6xl
mx-auto
grid
lg:grid-cols-2
gap-10
items-center
"

            >







                {/* LEFT */}


                <motion.div

                    initial={{ opacity: 0, x: -40 }}

                    animate={{ opacity: 1, x: 0 }}

                >


                    <div

                        className="
inline-flex
items-center
gap-2
bg-orange-100
text-orange-600
px-5
py-2
rounded-full
font-bold
"

                    >


                        <ShieldCheck size={18} />


                        Citizen Support


                    </div>






                    <h1

                        className="
mt-8
text-5xl
md:text-7xl
font-black
leading-tight
text-slate-950
"

                    >

                        Submit Your
                        <br />

                        Complaint

                    </h1>





                    <p

                        className="
mt-6
text-lg
text-gray-500
leading-8
"

                    >

                        Register your issue directly through the digital platform.

                        Track complaint status anytime using your complaint ID.


                    </p>








                    {

                        tracking &&


                        <div

                            className="
mt-10
bg-green-100
border
border-green-300
rounded-3xl
p-6
"

                        >


                            <CheckCircle2

                                className="text-green-600"

                            />



                            <h2

                                className="
text-xl
font-bold
mt-3
"

                            >

                                Complaint Submitted


                            </h2>



                            <p>

                                Tracking ID:


                            </p>


                            <h3

                                className="
text-3xl
font-black
text-green-700
"

                            >

                                {tracking}

                            </h3>



                        </div>


                    }





                </motion.div>









                {/* FORM */}



                <motion.form


                    onSubmit={submitComplaint}


                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}


                    className="
bg-white
rounded-[3rem]
shadow-2xl
border
p-8
space-y-5
"

                >







                    <input

                        placeholder="Full Name"

                        value={form.citizen_name}

                        onChange={e =>

                            setForm({

                                ...form,

                                citizen_name: e.target.value

                            })

                        }

                        className="input"

                    />





                    <div

                        className="
grid
md:grid-cols-2
gap-4
"

                    >


                        <input

                            placeholder="Phone"

                            value={form.phone}

                            onChange={e =>

                                setForm({

                                    ...form,

                                    phone: e.target.value

                                })

                            }

                            className="input"

                        />





                        <input

                            placeholder="Email"

                            value={form.email}

                            onChange={e =>

                                setForm({

                                    ...form,

                                    email: e.target.value

                                })

                            }

                            className="input"

                        />


                    </div>






                    <input

                        placeholder="Category"

                        value={form.category}

                        onChange={e =>

                            setForm({

                                ...form,

                                category: e.target.value

                            })

                        }

                        className="input"

                    />





                    <input

                        placeholder="Complaint Title"

                        value={form.title}

                        onChange={e =>

                            setForm({

                                ...form,

                                title: e.target.value

                            })

                        }

                        className="input"

                    />





                    <textarea

                        placeholder="Describe your problem"

                        value={form.description}

                        onChange={e =>

                            setForm({

                                ...form,

                                description: e.target.value

                            })

                        }

                        className="
input
min-h-32
"

                    />









                    <label

                        className="
border-2
border-dashed
rounded-3xl
p-6
flex
items-center
justify-center
gap-3
cursor-pointer
"

                    >


                        <FileImage />


                        Upload Images


                        <input

                            hidden

                            multiple

                            type="file"

                            onChange={e =>

                                setForm({

                                    ...form,

                                    images: [...e.target.files]

                                })

                            }

                        />


                    </label>








                    <button

                        disabled={loading}

                        className="
w-full
bg-slate-950
text-white
rounded-2xl
py-4
font-bold
flex
items-center
justify-center
gap-2
"

                    >



                        {

                            loading ?

                                <Loader2 className="animate-spin" />

                                :

                                <>

                                    <Send size={20} />

                                    Submit Complaint

                                </>


                        }



                    </button>





                </motion.form>





            </div>







        </section>


    )


}