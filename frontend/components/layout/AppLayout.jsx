"use client";


import { usePathname } from "next/navigation";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";






export default function AppLayout({ children }) {


    const pathname = usePathname();



    const isAdmin =
        pathname.startsWith("/admin");






    return (


        <div

            className="
            min-h-screen
            flex
            flex-col
            "

        >



            {

                !isAdmin &&

                <Navbar />

            }






            <main

                className="
                flex-1
                "

            >


                {children}


            </main>







            {

                !isAdmin &&

                <Footer />

            }



        </div>


    );


}