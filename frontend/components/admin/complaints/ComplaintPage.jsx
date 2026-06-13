"use client";


import { useEffect, useState } from "react";

import { motion } from "framer-motion";


import {

    MessageSquare,
    Phone,
    Mail,
    CheckCircle2,
    Loader2,
    Clock3,
    User,
    Tag,
    Inbox,
    ShieldCheck,
    ImageIcon,
    Eye

} from "lucide-react";


import { complaintService } from "@/services/complaintService";






export default function ComplaintPage() {


    const [complaints, setComplaints] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filter, setFilter] = useState("All");

    const [preview, setPreview] = useState(null);






    useEffect(() => {

        loadComplaints();

    }, []);







    const loadComplaints = async () => {


        try {


            const res =
                await complaintService.getAll();


            setComplaints(
                res.complaints || []
            );


        }
        catch (err) {

            console.log(err);

        }
        finally {

            setLoading(false);

        }


    };







    const changeStatus = async (id, status) => {


        await complaintService.updateStatus(

            id,

            {
                status,
                remark: `Complaint marked ${status}`
            }

        );


        loadComplaints();


    };








    const filtered =
        filter === "All"
            ?
            complaints
            :
            complaints.filter(
                i => i.status === filter
            );









    if (loading)


        return (

            <div className="h-[70vh] flex items-center justify-center">

                <Loader2
                    size={45}
                    className="animate-spin text-orange-500"
                />

            </div>

        );










    return (

        <section

            className="
min-h-screen
p-6
bg-gradient-to-br
from-slate-50
to-orange-50
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

                        Complaint Management

                    </h1>


                    <p className="text-white/60 mt-2">

                        Manage citizen complaints with evidence images

                    </p>

                </div>



                <div className="hidden md:flex gap-2 items-center bg-white/10 px-5 py-3 rounded-2xl">

                    <ShieldCheck className="text-green-400" />

                    Secure Portal

                </div>



            </div>










            {/* STATS */}


            <div className="grid md:grid-cols-3 gap-5 mt-6">


                {


                    [


                        [
                            "Total Complaints",
                            complaints.length,
                            MessageSquare
                        ],


                        [
                            "Pending",
                            complaints.filter(
                                i => i.status !== "Resolved"
                            ).length,
                            Clock3
                        ],


                        [
                            "Resolved",
                            complaints.filter(
                                i => i.status === "Resolved"
                            ).length,
                            CheckCircle2
                        ]


                    ].map(([title, value, Icon]) => (


                        <motion.div

                            key={title}

                            whileHover={{ y: -5 }}

                            className="
bg-white
rounded-[2rem]
p-6
shadow
border
flex
justify-between
"

                        >


                            <div>

                                <p className="text-gray-500">

                                    {title}

                                </p>


                                <h2 className="text-4xl font-black">

                                    {value}

                                </h2>


                            </div>



                            <div className="h-14 w-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center">

                                <Icon />

                            </div>



                        </motion.div>


                    ))

                }


            </div>









            {/* FILTER */}


            <div className="flex gap-3 mt-6">


                {

                    ["All", "Pending", "Resolved"]

                        .map(item => (


                            <button

                                key={item}

                                onClick={() => setFilter(item)}

                                className={`px-6 py-3 rounded-2xl font-bold

${filter === item

                                        ?

                                        "bg-slate-950 text-white"

                                        :

                                        "bg-white text-gray-500"

                                    }

`}

                            >

                                {item}

                            </button>


                        ))

                }


            </div>










            {/* LIST */}


            <div className="mt-6 space-y-6">



                {


                    filtered.length === 0 &&


                    <div className="bg-white rounded-[2rem] p-20 text-center text-gray-400">

                        <Inbox className="mx-auto" size={60} />

                        No Complaints Found

                    </div>


                }









                {


                    filtered.map((item, index) => (


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
                                delay: index * .05
                            }}


                            className="
bg-white
rounded-[2rem]
shadow-xl
border
p-6
"

                        >






                            <div className="flex flex-col xl:flex-row justify-between gap-6">



                                <div className="flex-1">



                                    <div className="flex gap-4">


                                        <div className="h-14 w-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center">

                                            <MessageSquare />

                                        </div>



                                        <div>


                                            <h2 className="text-xl font-black">

                                                {item.title}

                                            </h2>


                                            <p className="text-gray-400 text-sm">

                                                #{item.complaint_code}

                                            </p>


                                        </div>


                                    </div>








                                    <p className="mt-5 text-gray-600 leading-7">

                                        {item.description}

                                    </p>









                                    {/* IMAGE SECTION */}


                                    {

                                        item.images?.length > 0 &&


                                        <div className="mt-6">


                                            <div className="flex gap-2 items-center font-bold mb-3">

                                                <ImageIcon size={18} />

                                                Attached Images

                                            </div>



                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


                                                {


                                                    item.images.map((img, i) => (


                                                        <div

                                                            key={i}

                                                            onClick={() =>

                                                                setPreview(

                                                                    `${process.env.NEXT_PUBLIC_UPLOAD_URL}/${img}`

                                                                )

                                                            }

                                                            className="
relative
group
h-36
rounded-2xl
overflow-hidden
cursor-pointer
border
"

                                                        >


                                                            <img

                                                                src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${img}`}

                                                                className="
h-full
w-full
object-cover
group-hover:scale-110
transition
duration-500
"

                                                            />



                                                            <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">

                                                                <Eye className="text-white" />

                                                            </div>


                                                        </div>


                                                    ))

                                                }


                                            </div>


                                        </div>


                                    }









                                    <div className="grid md:grid-cols-4 gap-4 mt-6 text-gray-500 text-sm">


                                        <span className="flex gap-2">

                                            <User size={16} />

                                            {item.citizen_name}

                                        </span>


                                        <span className="flex gap-2">

                                            <Phone size={16} />

                                            {item.phone}

                                        </span>



                                        <span className="flex gap-2">

                                            <Mail size={16} />

                                            {item.email}

                                        </span>



                                        <span className="flex gap-2">

                                            <Tag size={16} />

                                            {item.category}

                                        </span>



                                    </div>



                                </div>








                                <div>


                                    <div

                                        className={`px-5 py-2 rounded-full font-bold

${item.status === "Resolved"

                                                ?

                                                "bg-green-100 text-green-700"

                                                :

                                                "bg-yellow-100 text-yellow-700"

                                            }

`}

                                    >

                                        {item.status}

                                    </div>



                                    {

                                        item.status !== "Resolved" &&


                                        <button

                                            onClick={() =>

                                                changeStatus(

                                                    item.id,

                                                    "Resolved"

                                                )

                                            }

                                            className="
mt-5
bg-green-600
text-white
px-6
py-3
rounded-xl
font-bold
"

                                        >

                                            Resolve

                                        </button>


                                    }


                                </div>



                            </div>


                        </motion.div>


                    ))


                }


            </div>









            {/* IMAGE PREVIEW MODAL */}


            {

                preview &&


                <div

                    onClick={() => setPreview(null)}

                    className="
fixed
inset-0
bg-black/80
z-50
flex
items-center
justify-center
p-5
"

                >


                    <img

                        src={preview}

                        className="
max-h-[90vh]
max-w-full
rounded-3xl
"

                    />


                </div>


            }





        </section>

    )


}