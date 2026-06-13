"use client";


import {

    useEffect,
    useState

} from "react";


import { motion } from "framer-motion";


import {

    Mail,
    Phone,
    Trash2,
    Loader2,
    MessageCircle,
    CalendarDays,
    User,
    X,
    Inbox

} from "lucide-react";


import {

    contactService

} from "@/services/contactService";








export default function ContactAdmin() {



    const [contacts, setContacts] =
        useState([]);


    const [loading, setLoading] =
        useState(true);



    const [selected, setSelected] =
        useState(null);








    useEffect(() => {


        loadContacts();


    }, []);









    const loadContacts = async () => {


        try {


            const res =
                await contactService.getAll();



            setContacts(
                res.contacts || []
            );


        }


        catch (error) {


            console.log(error);


        }


        finally {


            setLoading(false);


        }


    };












    const deleteMessage = async (id) => {


        if (!confirm("Delete this message?"))
            return;



        await contactService.delete(id);



        loadContacts();


    };













    if (loading)


        return (

            <div
                className="
        h-[70vh]
        flex
        justify-center
        items-center
        "
            >

                <Loader2

                    size={45}

                    className="
            animate-spin
            text-orange-500
            "

                />


            </div>

        );













    return (


        <section

            className="
p-6
space-y-8
bg-slate-50
min-h-screen
"

        >








            {/* HEADER */}


            <div

                className="
flex
justify-between
items-center
"

            >


                <div>


                    <h1

                        className="
text-4xl
font-black
text-slate-950
"

                    >

                        Contact Messages

                    </h1>



                    <p className="text-gray-500 mt-1">

                        Manage citizen enquiries and messages

                    </p>



                </div>





                <div

                    className="
hidden
md:flex
bg-white
shadow
rounded-2xl
px-5
py-3
gap-3
items-center
"

                >


                    <Inbox className="text-orange-500" />


                    <b>

                        {contacts.length}

                        Messages


                    </b>



                </div>



            </div>











            {/* GRID */}



            <div

                className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
"

            >


                {


                    contacts.map((item, index) => (




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
shadow-lg
border
p-6
hover:shadow-2xl
transition
"

                        >







                            <div

                                className="
flex
justify-between
"

                            >


                                <div

                                    className="
flex
gap-4
"

                                >



                                    <div

                                        className="
h-14
w-14
rounded-2xl
bg-orange-100
text-orange-600
flex
items-center
justify-center
"

                                    >


                                        <User />


                                    </div>






                                    <div>


                                        <h2

                                            className="
font-bold
text-xl
"

                                        >


                                            {item.name}


                                        </h2>



                                        <p

                                            className="
text-sm
text-gray-400
"

                                        >

                                            {item.subject || "No Subject"}

                                        </p>


                                    </div>



                                </div>








                                <button


                                    onClick={() => deleteMessage(item.id)}


                                    className="
text-red-500
"

                                >


                                    <Trash2 />


                                </button>



                            </div>









                            <div

                                className="
mt-6
space-y-3
text-gray-600
"

                            >


                                <p className="flex gap-2">

                                    <Mail size={18} />

                                    {item.email}

                                </p>




                                <p className="flex gap-2">

                                    <Phone size={18} />

                                    {item.phone}

                                </p>






                                <p className="flex gap-2">

                                    <CalendarDays size={18} />


                                    {

                                        new Date(item.created_at)
                                            .toLocaleDateString()

                                    }


                                </p>



                            </div>










                            <p

                                className="
mt-5
text-gray-500
line-clamp-3
"

                            >

                                {item.message}

                            </p>









                            <button


                                onClick={() => setSelected(item)}


                                className="
mt-6
w-full
bg-slate-950
text-white
rounded-xl
py-3
font-bold
"

                            >

                                View Message


                            </button>








                        </motion.div>



                    ))


                }



            </div>









            {/* EMPTY */}


            {

                contacts.length === 0 &&



                <div

                    className="
text-center
py-20
text-gray-400
"

                >


                    <MessageCircle

                        size={80}

                        className="mx-auto"

                    />


                    <p className="mt-5">

                        No messages received

                    </p>


                </div>


            }









            {/* MODAL */}



            {

                selected &&


                <div

                    className="
fixed
inset-0
bg-black/50
backdrop-blur
flex
justify-center
items-center
z-50
p-5
"

                >


                    <motion.div


                        initial={{ scale: .8 }}

                        animate={{ scale: 1 }}


                        className="
bg-white
rounded-[3rem]
max-w-xl
w-full
p-8
shadow-2xl
"

                    >



                        <div

                            className="
flex
justify-between
"

                        >


                            <h2

                                className="
text-3xl
font-black
"

                            >

                                {selected.name}

                            </h2>




                            <button

                                onClick={() => setSelected(null)}

                            >

                                <X />

                            </button>



                        </div>








                        <p

                            className="
mt-8
text-lg
leading-8
text-gray-700
"

                        >

                            {selected.message}

                        </p>





                    </motion.div>



                </div>



            }







        </section>


    )


}