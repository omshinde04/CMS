"use client";


import Link from "next/link";

import { motion } from "framer-motion";


import {

  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck

} from "lucide-react";



import {

  FaFacebookF,
  FaInstagram,
  FaYoutube

} from "react-icons/fa";






export default function Footer() {



  const quickLinks = [


    ["About", "/about"],

    ["Vision", "/vision"],

    ["Projects", "/projects"],

    ["Gallery", "/gallery"],

    ["Blogs", "/blogs"]


  ];




  const citizenLinks = [


    ["Raise Complaint", "/complaint"],

    ["Book Appointment", "/appointment"],

    ["Government Schemes", "/schemes"],

    ["Contact Office", "/contact"]


  ];





  const socialIcons = [

    FaFacebookF,

    FaInstagram,

    FaYoutube

  ];






  return (


    <footer

      className="
bg-navy-950
text-white
relative
overflow-hidden
"

    >





      <div
        className="
absolute
top-0
right-0
w-96
h-96
bg-saffron-500/10
rounded-full
blur-3xl
"
      />






      <div
        className="
container-custom
relative
"
      >






        <div

          className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-12
py-16
"

        >








          {/* BRAND */}



          <motion.div


            initial={{
              opacity: 0,
              y: 30
            }}


            whileInView={{
              opacity: 1,
              y: 0
            }}


            viewport={{
              once: true
            }}


          >





            <div

              className="
flex
gap-3
items-center
mb-5
"

            >




              <div

                className="
h-14
w-14
rounded-2xl
bg-gradient-to-br
from-saffron-400
to-gold
flex
items-center
justify-center
font-bold
text-xl
"

              >

                SD

              </div>







              <div>


                <h2

                  className="
font-display
text-2xl
font-bold
"

                >

                  Subhash Deshmukh

                </h2>




                <p

                  className="
text-sm
text-gray-400
"

                >

                  Leader Digital Platform

                </p>


              </div>



            </div>









            <p

              className="
text-gray-400
leading-7
"

            >

              Official digital platform dedicated to public service,
              development initiatives and connecting citizens with
              leadership.


            </p>








            <div

              className="
flex
gap-4
mt-6
"

            >


              {


                socialIcons.map((Icon, index) => (



                  <div

                    key={index}


                    className="
h-10
w-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-saffron-500
transition
cursor-pointer
"

                  >


                    <Icon size={17} />


                  </div>


                ))


              }



            </div>





          </motion.div>









          {/* QUICK LINKS */}


          <div>



            <h3

              className="
font-semibold
text-lg
mb-5
"

            >

              Quick Links

            </h3>





            <div className="space-y-3">


              {

                quickLinks.map(([name, href]) => (



                  <Link

                    key={name}

                    href={href}


                    className="
flex
gap-2
items-center
text-gray-400
hover:text-saffron-400
transition
"

                  >


                    <ArrowRight size={15} />


                    {name}


                  </Link>



                ))


              }


            </div>



          </div>










          {/* CITIZEN SERVICES */}


          <div>



            <h3

              className="
font-semibold
text-lg
mb-5
"

            >

              Citizen Services

            </h3>






            <div className="space-y-3">



              {

                citizenLinks.map(([name, href]) => (



                  <Link


                    key={name}

                    href={href}


                    className="
flex
gap-2
items-center
text-gray-400
hover:text-saffron-400
transition
"

                  >


                    <ShieldCheck size={15} />


                    {name}


                  </Link>


                ))


              }



            </div>



          </div>











          {/* CONTACT */}



          <div>



            <h3

              className="
font-semibold
text-lg
mb-5
"

            >

              Contact

            </h3>





            <div

              className="
space-y-4
text-gray-400
"

            >




              <p className="flex gap-3">


                <MapPin className="text-saffron-400" />


                South Solapur, Maharashtra


              </p>






              <p className="flex gap-3">


                <Phone className="text-saffron-400" />


                Official Helpdesk


              </p>






              <p className="flex gap-3">


                <Mail className="text-saffron-400" />


                helpdesk@subhashdeshmukh.in


              </p>





            </div>




          </div>





        </div>









        {/* COPYRIGHT */}


        <div

          className="
border-t
border-white/10
py-6
flex
flex-col
md:flex-row
justify-between
text-sm
text-gray-400
"

        >



          <p>

            © {new Date().getFullYear()} Subhash Deshmukh. All Rights Reserved.

          </p>





          <p>


            Developed by

            <span

              className="
text-saffron-400
font-semibold
"

            >

              {" "}Om Shinde

            </span>


          </p>




        </div>





      </div>




    </footer>


  )



}