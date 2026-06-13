import { Images } from "lucide-react";


export default function GalleryEmpty() {


    return (

        <div
            className="
max-w-xl
mx-auto
my-20
bg-white
rounded-3xl
p-16
text-center
shadow-xl
"
        >

            <Images
                size={70}
                className="
mx-auto
text-gray-300
"
            />

            <h2
                className="
mt-5
text-2xl
font-black
"
            >
                No Gallery Found
            </h2>


            <p
                className="
text-gray-500
"
            >
                New memories will appear soon.
            </p>


        </div>


    )

}