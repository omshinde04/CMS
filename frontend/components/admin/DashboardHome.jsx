"use client";


import {

    useEffect,
    useState

} from "react";


import { motion } from "framer-motion";


import {

    MessageSquare,
    CheckCircle2,
    Clock3,
    CalendarDays,
    Newspaper,
    Image,
    Users,
    Loader2,
    ShieldCheck,
    Activity

} from "lucide-react";


import { dashboardService } from "@/services/dashboardService";






export default function DashboardHome() {


    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);





    useEffect(() => {

        loadDashboard();

    }, []);






    const loadDashboard = async () => {


        try {


            const res =
                await dashboardService.getStats();


            setStats(res.stats);


        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }


    };









    if (loading)

        return (

            <div className="h-[70vh] flex justify-center items-center">

                <Loader2
                    size={40}
                    className="animate-spin text-orange-500"
                />

            </div>

        );









    const cards = [


        {
            title: "Total Complaints",
            desc: "Citizen issues received",
            value: stats.complaints,
            icon: MessageSquare
        },


        {
            title: "Pending Complaints",
            desc: "Waiting for action",
            value: stats.pending,
            icon: Clock3
        },


        {
            title: "Resolved Issues",
            desc: "Successfully completed",
            value: stats.resolved,
            icon: CheckCircle2
        },


        {
            title: "Appointments",
            desc: "Meeting requests",
            value: stats.appointments,
            icon: CalendarDays
        },


        {
            title: "Published Blogs",
            desc: "News and updates",
            value: stats.blogs,
            icon: Newspaper
        },


        {
            title: "Gallery Photos",
            desc: "Public event media",
            value: stats.gallery,
            icon: Image
        },


        {
            title: "Admin Users",
            desc: "System operators",
            value: stats.users,
            icon: Users
        }


    ];











    return (

        <section

            className="
h-[calc(100vh-80px)]
overflow-hidden
p-6
bg-gradient-to-br
from-slate-50
to-orange-50/40
"

        >









            {/* HERO */}


            <div

                className="
mb-6
rounded-[2rem]
bg-gradient-to-r
from-slate-950
to-slate-800
text-white
p-7
flex
items-center
justify-between
shadow-xl
"

            >



                <div>


                    <h1 className="text-3xl font-black">

                        Digital Platform Overview

                    </h1>


                    <p className="text-white/60 mt-2">

                        Monitor citizens, services and content management

                    </p>


                </div>





                <div

                    className="
hidden
md:flex
items-center
gap-3
bg-white/10
px-5
py-3
rounded-2xl
"

                >


                    <ShieldCheck className="text-green-400" />


                    Live System


                </div>



            </div>









            {/* CARDS */}


            <div

                className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
"

            >


                {


                    cards.map((item, index) => {


                        const Icon = item.icon;



                        return (


                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 25
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    delay: index * .05
                                }}

                                whileHover={{
                                    y: -5
                                }}


                                className="
relative
overflow-hidden
bg-white
rounded-[2rem]
p-6
shadow-md
border
border-white
"

                            >



                                <div

                                    className="
flex
justify-between
items-start
"

                                >


                                    <div>


                                        <p

                                            className="
text-sm
font-semibold
text-gray-500
"

                                        >

                                            {item.title}

                                        </p>




                                        <h2

                                            className="
mt-3
text-4xl
font-black
text-slate-950
"

                                        >

                                            {item.value}

                                        </h2>




                                        <p

                                            className="
mt-2
text-sm
text-gray-400
"

                                        >

                                            {item.desc}

                                        </p>



                                    </div>







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


                                        <Icon size={25} />


                                    </div>



                                </div>




                            </motion.div>


                        )


                    })

                }


            </div>










            {/* BOTTOM */}



            <div

                className="
mt-6
grid
grid-cols-3
gap-5
"

            >





                <div

                    className="
bg-white
rounded-[2rem]
p-6
shadow
"

                >


                    <Activity className="text-orange-500" />


                    <p className="mt-4 text-gray-500">

                        Total Citizen Interactions

                    </p>


                    <h2 className="text-3xl font-black mt-2">

                        {
                            Number(stats.complaints)
                            +
                            Number(stats.appointments)
                        }

                    </h2>



                </div>








                <div

                    className="
bg-white
rounded-[2rem]
p-6
shadow
"

                >


                    <CheckCircle2 className="text-green-500" />


                    <p className="mt-4 text-gray-500">

                        Resolution Status

                    </p>



                    <h2 className="text-3xl font-black mt-2">

                        {stats.resolved}

                        Solved

                    </h2>


                </div>








                <div

                    className="
rounded-[2rem]
p-6
shadow
bg-gradient-to-br
from-orange-500
to-yellow-500
text-white
"

                >


                    <ShieldCheck />


                    <p className="mt-4 text-white/70">

                        System Health

                    </p>


                    <h2 className="text-3xl font-black mt-2">

                        Active

                    </h2>


                </div>



            </div>







        </section>


    )


}