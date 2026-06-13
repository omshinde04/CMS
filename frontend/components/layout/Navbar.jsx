"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";


import {

  Menu,
  X,
  ShieldCheck,
  Home,
  User,
  Target,
  Landmark,
  Image,
  Newspaper,
  Phone,
  FileText,
  ChevronDown,
  CalendarDays,
  MessageSquare

} from "lucide-react";





const navLinks = [

  {
    title: "Home",
    href: "/",
    icon: Home
  },

  {
    title: "About",
    href: "/about",
    icon: User
  },

  {
    title: "Vision",
    href: "/vision",
    icon: Target
  },

  {
    title: "Projects",
    href: "/projects",
    icon: Landmark
  },

  {
    title: "Schemes",
    href: "/schemes",
    icon: FileText
  },

  {
    title: "Gallery",
    href: "/gallery",
    icon: Image
  },

  {
    title: "Blogs",
    href: "/blogs",
    icon: Newspaper
  },

  {
    title: "Contact",
    href: "/contact",
    icon: Phone
  }

];









export default function Navbar() {


  const pathname =
    usePathname();



  const [open, setOpen] =
    useState(false);



  const [serviceOpen, setServiceOpen] =
    useState(false);









  return (


    <header

      className="
            sticky
            top-0
            z-50
            bg-white/95
            backdrop-blur-xl
            border-b
            border-orange-100
            shadow-md
            "

    >







      <nav

        className="
                max-w-[1800px]
                mx-auto
                h-24
                px-5
                xl:px-8
                flex
                items-center
                justify-between
                gap-6
                "

      >








        {/* LOGO */}



        <Link

          href="/"

          className="
                    flex
                    items-center
                    gap-4
                    shrink-0
                    "

        >



          <motion.div

            whileHover={{
              scale: 1.05
            }}

            className="
                        h-[70px]
                        w-[70px]
                        rounded-full
                        bg-white
                        shadow-lg
                        border
                        border-orange-200
                        overflow-hidden
                        "

          >


            <img

              src="/logo.png"

              alt="logo"

              className="
                            w-full
                            h-full
                            object-contain
                            p-2
                            "

            />


          </motion.div>







          <div className="hidden sm:block">


            <h1

              className="
                            font-display
                            text-3xl
                            font-black
                            leading-none
                            whitespace-nowrap
                            "

            >

              Subhash


              <span className="text-orange-600 ml-2">

                Deshmukh

              </span>


            </h1>



            <p

              className="
                            mt-2
                            text-xs
                            tracking-[0.25em]
                            uppercase
                            font-bold
                            text-blue-900
                            "

            >

              Leader Digital Platform

            </p>


          </div>


        </Link>













        {/* DESKTOP MENU */}



        <div

          className="
                    hidden
                    xl:flex
                    items-center
                    gap-4
                    "

        >



          {

            navLinks.map(item => {


              const Icon = item.icon;


              const active =
                pathname === item.href;



              return (


                <Link

                  href={item.href}

                  key={item.href}


                  className={`
                                    flex
                                    items-center
                                    gap-1
                                    text-sm
                                    font-bold
                                    transition

                                    ${active
                      ?
                      "text-orange-600"
                      :
                      "text-slate-700 hover:text-orange-600"
                    }

                                    `}

                >


                  <Icon size={15} />


                  {item.title}



                </Link>

              )


            })

          }



        </div>









        {/* SERVICE DROPDOWN */}



        <div

          className="
                    hidden
                    xl:block
                    relative
                    "


          onMouseEnter={() =>
            setServiceOpen(true)
          }


          onMouseLeave={() =>
            setServiceOpen(false)
          }

        >




          <button

            className="
                        bg-slate-950
                        text-white
                        px-5
                        py-3
                        rounded-2xl
                        flex
                        gap-2
                        items-center
                        font-bold
                        "

          >

            Services


            <ChevronDown size={16} />


          </button>









          <AnimatePresence>


            {

              serviceOpen &&



              <motion.div


                initial={{
                  opacity: 0,
                  y: 15
                }}


                animate={{
                  opacity: 1,
                  y: 0
                }}


                exit={{
                  opacity: 0
                }}


                className="
                                absolute
                                right-0
                                top-14
                                w-72
                                bg-white
                                rounded-3xl
                                shadow-2xl
                                border
                                p-4
                                space-y-2
                                "

              >






                <Link

                  href="/complaint"

                  className="
                                    flex
                                    gap-3
                                    p-4
                                    rounded-xl
                                    hover:bg-orange-50
                                    font-bold
                                    "

                >

                  <MessageSquare className="text-orange-500" />

                  Raise Complaint


                </Link>






                <Link

                  href="/appointment"

                  className="
                                    flex
                                    gap-3
                                    p-4
                                    rounded-xl
                                    hover:bg-green-50
                                    font-bold
                                    "

                >

                  <CalendarDays className="text-green-600" />

                  Appointment


                </Link>









                <Link

                  href="/admin/login"

                  className="
                                    flex
                                    gap-3
                                    p-4
                                    rounded-xl
                                    hover:bg-blue-50
                                    font-bold
                                    "

                >

                  <ShieldCheck className="text-blue-600" />


                  Admin Panel


                </Link>





              </motion.div>


            }


          </AnimatePresence>



        </div>












        {/* MOBILE BUTTON */}


        <button

          onClick={() =>
            setOpen(!open)
          }

          className="
                    xl:hidden
                    "

        >

          {
            open
              ?
              <X size={30} />
              :
              <Menu size={30} />
          }


        </button>








      </nav>












      {/* MOBILE */}



      <AnimatePresence>


        {

          open &&


          <motion.div


            initial={{
              height: 0
            }}


            animate={{
              height: "auto"
            }}


            exit={{
              height: 0
            }}


            className="
                        xl:hidden
                        overflow-hidden
                        bg-white
                        "

          >


            <div className="p-5 space-y-3">


              {

                navLinks.map(item => {

                  const Icon = item.icon;


                  return (

                    <Link

                      href={item.href}

                      key={item.href}

                      onClick={() => setOpen(false)}

                      className="
                                            flex
                                            gap-3
                                            p-3
                                            font-bold
                                            "

                    >

                      <Icon />

                      {item.title}


                    </Link>

                  )


                })


              }



              <Link href="/complaint">

                Raise Complaint

              </Link>



              <Link href="/appointment">

                Appointment

              </Link>



              <Link href="/admin/login">

                Admin

              </Link>




            </div>


          </motion.div>


        }


      </AnimatePresence>






    </header>


  )

}