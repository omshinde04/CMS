"use client";


import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

import GalleryHero from "@/components/gallery/GalleryHero";

import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryEmpty from "@/components/gallery/GalleryEmpty";

import { publicGalleryService }
    from "@/services/public/publicGalleryService";





export default function GalleryPage() {


    const [gallery, setGallery] = useState([]);

    const [loading, setLoading] = useState(true);





    useEffect(() => {


        async function loadGallery() {


            try {


                const res =
                    await publicGalleryService.getGallery();


                setGallery(res.gallery || []);


            }

            catch (err) {

                console.log(err);

            }

            finally {

                setLoading(false);

            }


        }


        loadGallery();


    }, []);






    if (loading)

        return (

            <div
                className="
min-h-screen
flex
items-center
justify-center
"
            >

                <Loader2
                    size={45}
                    className="
animate-spin
text-saffron-600
"
                />

            </div>

        )







    return (

        <section
            className="
bg-[#faf8f3]
min-h-screen
"
        >


            <GalleryHero />




            {

                gallery.length ?

                    <GalleryGrid

                        gallery={gallery}

                    />

                    :

                    <GalleryEmpty />

            }



        </section>

    )


}