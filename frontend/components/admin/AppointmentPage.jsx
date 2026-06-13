"use client";


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import {

    CalendarDays,
    User,
    Phone,
    Mail,
    Clock,
    Loader2,
    Users,
    ShieldCheck,
    X,
    CheckCircle2

} from "lucide-react";


import { appointmentService } from "@/services/appointmentService";






export default function AppointmentPage() {


    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(true);

    const [selected, setSelected] = useState(null);

    const [active, setActive] = useState("All");





    useEffect(() => {

        loadAppointments();

    }, []);





    const loadAppointments = async () => {


        try {


            const res =
                await appointmentService.getAll();


            setAppointments(
                res.appointments || []
            );


        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }


    };








    const updateStatus = async (id, status) => {


        await appointmentService.updateStatus(
            id,
            { status }
        );


        setSelected(null);


        loadAppointments();


    };







    const data =

        active === "All"

            ?

            appointments

            :

            appointments.filter(
                i => i.status === active
            );









    if (loading)

        return (

            <div className="h-[70vh] flex justify-center items-center">

                <Loader2 className="animate-spin text-orange-500" />

            </div>

        );









    return (

        <section className="p-6 bg-[#f7f8fc] min-h-screen">









            {/* HEADER */}


            <div className="flex justify-between items-center">


                <div>


                    <h1 className="text-3xl font-black">

                        Appointment Center

                    </h1>


                    <p className="text-gray-500">

                        Manage citizen meetings

                    </p>


                </div>



                <div className="bg-white shadow rounded-2xl px-5 py-3 flex gap-3">

                    <ShieldCheck className="text-green-600" />

                    System Active

                </div>



            </div>









            {/* STATS */}


            <div className="grid md:grid-cols-3 gap-5 mt-7">


                <Stat

                    title="Total"

                    value={appointments.length}

                    Icon={Users}

                />



                <Stat

                    title="Pending"

                    value={
                        appointments.filter(
                            x => x.status === "Pending"
                        ).length
                    }

                    Icon={Clock}

                />



                <Stat

                    title="Completed"

                    value={
                        appointments.filter(
                            x => x.status === "Completed"
                        ).length
                    }

                    Icon={CheckCircle2}

                />


            </div>









            {/* FILTER */}


            <div className="flex gap-3 mt-6">


                {

                    [
                        "All",
                        "Pending",
                        "Approved",
                        "Completed",
                        "Rejected"

                    ].map(x => (


                        <button

                            key={x}

                            onClick={() => setActive(x)}

                            className={`px-5 py-2 rounded-xl font-bold

${active === x

                                    ?

                                    "bg-black text-white"

                                    :

                                    "bg-white text-gray-500"

                                }`}

                        >

                            {x}

                        </button>


                    ))

                }


            </div>









            {/* CARDS */}


            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5 mt-6">


                {


                    data.map(item => (



                        <motion.div

                            key={item.id}

                            whileHover={{ y: -5 }}

                            onClick={() => setSelected(item)}

                            className="
bg-white
rounded-[2rem]
p-6
shadow
cursor-pointer
border
"

                        >



                            <div className="flex justify-between">


                                <div>


                                    <h2 className="font-black text-xl">

                                        {item.name}

                                    </h2>


                                    <p className="text-gray-500 mt-1 line-clamp-1">

                                        {item.reason}

                                    </p>


                                </div>




                                <span className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-xl h-fit">

                                    {item.status}

                                </span>



                            </div>





                            <div className="mt-6 flex gap-2 text-gray-400">

                                <CalendarDays size={18} />

                                {

                                    new Date(item.date)
                                        .toLocaleDateString()

                                }

                            </div>



                        </motion.div>



                    ))


                }



            </div>









            {/* MODAL */}



            <AnimatePresence>


                {

                    selected &&



                    <motion.div

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}

                        className="
fixed
inset-0
bg-black/40
backdrop-blur-sm
z-50
flex
items-center
justify-center
"

                    >


                        <motion.div

                            initial={{ scale: .8 }}

                            animate={{ scale: 1 }}

                            exit={{ scale: .8 }}

                            className="
bg-white
rounded-[2rem]
p-8
w-[450px]
shadow-2xl
"

                        >


                            <div className="flex justify-between">


                                <h2 className="text-2xl font-black">

                                    Appointment Details

                                </h2>


                                <X

                                    onClick={() => setSelected(null)}

                                    className="cursor-pointer"

                                />


                            </div>





                            <Info Icon={User} text={selected.name} />

                            <Info Icon={Phone} text={selected.phone} />

                            <Info Icon={Mail} text={selected.email} />

                            <Info Icon={Clock} text={selected.reason} />





                            <div className="flex gap-3 mt-8">


                                {

                                    selected.status === "Pending" &&

                                    <>

                                        <button

                                            onClick={() => updateStatus(selected.id, "Approved")}

                                            className="bg-green-600 text-white px-5 py-3 rounded-xl"

                                        >

                                            Approve

                                        </button>


                                        <button

                                            onClick={() => updateStatus(selected.id, "Rejected")}

                                            className="bg-red-600 text-white px-5 py-3 rounded-xl"

                                        >

                                            Reject

                                        </button>


                                    </>

                                }



                                {

                                    selected.status === "Approved" &&


                                    <button

                                        onClick={() => updateStatus(selected.id, "Completed")}

                                        className="bg-black text-white px-5 py-3 rounded-xl"

                                    >

                                        Complete

                                    </button>


                                }



                            </div>



                        </motion.div>


                    </motion.div>


                }


            </AnimatePresence>







        </section>

    )

}








function Stat({ title, value, Icon }) {


    return (

        <div className="bg-white rounded-[2rem] p-6 shadow flex justify-between">


            <div>


                <p className="text-gray-500">

                    {title}

                </p>


                <h1 className="text-4xl font-black">

                    {value}

                </h1>


            </div>


            <Icon className="text-orange-500" />


        </div>

    )

}








function Info({ Icon, text }) {

    return (

        <div className="mt-5 flex gap-3 text-gray-600">

            <Icon size={18} />

            {text}

        </div>

    )

}