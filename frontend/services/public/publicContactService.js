import api from "../api";



export const publicContactService = {



    sendMessage: async (payload) => {


        const { data } = await api.post(

            "/contact",

            payload

        );


        return data;


    }



};