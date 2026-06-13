"use client";


import { usePathname } from "next/navigation";


import Sidebar from "@/components/admin/Sidebar";

import Topbar from "@/components/admin/Topbar";

import ProtectedRoute from "@/components/admin/ProtectedRoute";







export default function AdminLayout({ children }) {


    const pathname = usePathname();




    const publicPages = [

        "/admin/login",

        "/admin/register"

    ];




    const isPublicPage =

        publicPages.includes(pathname);







    // LOGIN + REGISTER WITHOUT DASHBOARD LAYOUT

    if (isPublicPage) {


        return (

            <>

                {children}

            </>

        );


    }









    // PROTECTED ADMIN DASHBOARD LAYOUT

    return (


        <ProtectedRoute requiredRole="admin">


            <div

                className="
                min-h-screen
                bg-slate-50
                "

            >



                <Sidebar />






                <div

                    className="
                    lg:ml-72
                    min-h-screen
                    "

                >



                    <Topbar />




                    <main

                        className="
                        min-h-[calc(100vh-80px)]
                        "

                    >


                        {children}


                    </main>




                </div>




            </div>


        </ProtectedRoute>


    );


}