import api from "./api";



export const contactService = {


    getAll: async () => {


        const { data } =
            await api.get(
                "/contact"
            );


        return data;


    },




    delete: async (id) => {


        const { data } =
            await api.delete(
                `/contact/${id}`
            );


        return data;


    }


};