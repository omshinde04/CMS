"use client";


import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";


import {

  LayoutDashboard,
  Images,
  Newspaper,
  MessageSquare,
  CalendarDays,
  LogOut,
  ShieldCheck,
  ChevronRight,
  UserCircle,
  Mail

} from "lucide-react";


import { authService } from "@/services/authService";

import { useAuth } from "@/context/AuthContext";








const menu = [


  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard
  },


  {
    name: "Complaints",
    href: "/admin/complaints",
    icon: MessageSquare
  },


  {
    name: "Appointments",
    href: "/admin/appointments",
    icon: CalendarDays
  },


  {
    name: "Contact Messages",
    href: "/admin/contact",
    icon: Mail
  },


  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: Images
  },


  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: Newspaper
  }


];










export default function Sidebar() {



  const pathname = usePathname();

  const router = useRouter();


  const { user } = useAuth();








  const logout = () => {


    authService.logout();


    router.push(
      "/admin/login"
    );


  };









  return (


    <aside

      className="
fixed
left-0
top-0
hidden
lg:flex
h-screen
w-72
flex-col
overflow-hidden
bg-[#081225]
text-white
border-r
border-white/10
"

    >








      {/* EFFECT */}


      <div

        className="
absolute
-top-20
-left-20
h-72
w-72
rounded-full
bg-orange-400/20
blur-[120px]
"

      />










      <div

        className="
relative
flex
h-full
flex-col
p-6
"

      >







        {/* LOGO */}


        <div

          className="
flex
items-center
gap-4
"

        >



          <div

            className="
h-14
w-14
rounded-2xl
bg-gradient-to-br
from-orange-400
to-yellow-500
flex
items-center
justify-center
shadow-xl
"

          >


            <ShieldCheck size={30} />


          </div>







          <div>


            <h1 className="text-xl font-bold">

              Admin Panel

            </h1>



            <p className="text-xs text-white/50">

              Digital Governance

            </p>


          </div>



        </div>










        {/* USER CARD */}


        <div

          className="
mt-8
rounded-3xl
bg-white/10
backdrop-blur
p-4
flex
items-center
gap-3
"

        >



          <UserCircle

            size={42}

            className="
text-orange-400
"

          />




          <div>


            <h3 className="font-semibold">


              {
                user?.name ||
                "Administrator"
              }


            </h3>



            <p className="text-xs text-white/40">

              Secure Access

            </p>


          </div>




        </div>











        {/* MENU */}



        <nav

          className="
mt-10
space-y-2
"

        >



          {

            menu.map((item) => {


              const Icon =
                item.icon;



              const active =
                pathname === item.href;








              return (


                <Link


                  key={item.href}


                  href={item.href}



                  className={`
group
flex
items-center
justify-between
rounded-2xl
px-5
py-4
transition-all


${active ?

                      "bg-white text-slate-950 shadow-xl"

                      :

                      "text-white/60 hover:bg-white/10 hover:text-white"

                    }


`}

                >







                  <div

                    className="
flex
items-center
gap-3
"

                  >



                    <Icon

                      size={20}

                      className={

                        active ?

                          "text-orange-500"

                          :

                          "group-hover:text-orange-400"

                      }

                    />





                    <span className="font-medium">

                      {item.name}

                    </span>





                  </div>









                  {

                    active &&


                    <ChevronRight

                      size={18}

                      className="
text-orange-500
"

                    />

                  }








                </Link>



              )


            })


          }




        </nav>









        {/* FOOTER */}



        <div

          className="
mt-auto
space-y-5
"

        >








          <div

            className="
rounded-3xl
bg-gradient-to-br
from-orange-400
to-yellow-500
p-5
shadow-xl
"

          >



            <p className="text-sm font-bold">


              Subhash Deshmukh


            </p>




            <p

              className="
text-xs
text-white/80
mt-1
"

            >

              Leader Digital Platform


            </p>



          </div>










          <button


            onClick={logout}


            className="
w-full
flex
items-center
justify-center
gap-3
rounded-2xl
bg-red-500/10
text-red-300
py-4
font-semibold
hover:bg-red-500
hover:text-white
transition
"

          >


            <LogOut size={20} />


            Logout



          </button>





        </div>







      </div>







    </aside>


  )


}