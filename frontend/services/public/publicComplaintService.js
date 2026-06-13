import api from "../api";



export const publicComplaintService = {



    create: async (payload) => {


        const { data } =
            await api.post(

                "/complaints",

                payload,

                {
                    headers: {

                        "Content-Type":
                            "multipart/form-data"

                    }
                }

            );


        return data;


    },







    track: async (id) => {


        const { data } =
            await api.get(

                `/complaints/track/${id}`

            );


        return data;


    }



};