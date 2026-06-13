"use client";


import { useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";



export default function GalleryGrid({ gallery }) {


    const [active, setActive] = useState(null);



    return (

        <>


            <div
                className="
max-w-7xl
mx-auto
px-6
pb-20

columns-1
sm:columns-2
lg:columns-3
gap-7
space-y-7
"
            >


                {

                    gallery.map(item => (


                        <GalleryCard

                            key={item.id}

                            item={item}

                            open={() => setActive(item)}

                        />


                    ))

                }


            </div>


            <GalleryModal

                active={active}

                close={() => setActive(null)}

            />


        </>

    )

}