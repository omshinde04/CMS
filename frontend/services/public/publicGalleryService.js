import axios from "axios";


export const publicGalleryService = {


    getGallery: async () => {


        const { data } = await axios.get(

            `${process.env.NEXT_PUBLIC_API_URL}/gallery`

        );


        return data;


    }


};