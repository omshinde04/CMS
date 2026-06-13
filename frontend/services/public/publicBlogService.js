import axios from "axios";


const publicApi = axios.create({

    baseURL:
        process.env.NEXT_PUBLIC_API_URL

});





export const publicBlogService = {



    getBlogs: async () => {


        const { data } =
            await publicApi.get(
                "/blogs"
            );


        return data;


    },








    getBySlug: async (slug) => {


        const { data } =
            await publicApi.get(

                `/blogs/slug/${slug}`

            );


        return data;


    }



};