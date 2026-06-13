"use client";


import {

  Bell,
  ShieldCheck,
  UserCircle,
  Crown

} from "lucide-react";


import { motion } from "framer-motion";

import { useAuth } from "@/context/AuthContext";

import { usePathname } from "next/navigation";









export default function Topbar() {



  const { user } = useAuth();


  const pathname = usePathname();






  const pageName =

    pathname
      .split("/")
      .pop()
      .replace("-", " ");








  return (


    <header

      className="
sticky
top-0
z-40
h-20
px-6
lg:px-10
border-b
border-white/60
bg-white/80
backdrop-blur-xl
flex
items-center
justify-between
"

    >










      {/* LEFT */}



      <motion.div

        initial={{
          opacity: 0,
          x: -20
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

      >


        <div

          className="
flex
items-center
gap-4
"

        >



          <div

            className="
hidden
md:flex
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-orange-400
to-yellow-500
items-center
justify-center
shadow-lg
"

          >

            <ShieldCheck

              className="text-white"

            />


          </div>





          <div>


            <h1

              className="
text-2xl
font-black
capitalize
text-slate-950
"

            >

              {
                pageName === "dashboard"
                  ?
                  "Admin Dashboard"
                  :
                  pageName
              }


            </h1>



            <p

              className="
text-sm
text-gray-500
"

            >

              Subhash Deshmukh Digital Platform

            </p>



          </div>


        </div>



      </motion.div>









      {/* RIGHT */}



      <div

        className="
flex
items-center
gap-5
"

      >









        {/* Notification */}



        <button

          className="
relative
h-12
w-12
rounded-2xl
bg-slate-100
hover:bg-slate-200
transition
flex
items-center
justify-center
"

        >


          <Bell size={20} />



          <span

            className="
absolute
top-3
right-3
h-2.5
w-2.5
rounded-full
bg-red-500
ring-2
ring-white
"

          />



        </button>









        {/* USER */}



        <motion.div

          whileHover={{
            scale: 1.03
          }}

          className="
hidden
sm:flex
items-center
gap-4
bg-white
border
shadow-md
rounded-2xl
px-5
py-3
"

        >




          <div

            className="
h-11
w-11
rounded-xl
bg-slate-950
text-white
flex
items-center
justify-center
"

          >

            <UserCircle />

          </div>





          <div>


            <h4

              className="
font-bold
text-slate-900
leading-none
"

            >


              {
                user?.name || "Admin"
              }


            </h4>



            <div

              className="
mt-2
flex
items-center
gap-1
text-xs
text-orange-500
font-semibold
"

            >


              <Crown size={13} />


              {
                user?.role || "Administrator"
              }


            </div>



          </div>




        </motion.div>






      </div>






    </header>


  )


}