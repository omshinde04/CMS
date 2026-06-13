import { Inter, Playfair_Display } from "next/font/google";


import { AuthProvider } from "@/context/AuthContext";


import AppLayout from "@/components/layout/AppLayout";


import "./globals.css";






const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter"

});





const playfair = Playfair_Display({

  subsets: ["latin"],

  variable: "--font-playfair"

});







export const metadata = {


  title:
    "Subhash Deshmukh — Leader Digital Platform",



  description:
    "Official digital platform of Subhash Sureshchandra Deshmukh."


};









export default function RootLayout({ children }) {


  return (


    <html lang="en">



      <body

        className={`
                ${inter.variable}
                ${playfair.variable}

                font-sans
                antialiased

                bg-white
                text-navy-900
                `}

      >





        <AuthProvider>



          <AppLayout>


            {children}


          </AppLayout>




        </AuthProvider>






      </body>



    </html>


  );


}