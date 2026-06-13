import api from "./api";



export const galleryService = {


  getAll: async () => {


    const { data } = await api.get(

      "/gallery"

    );


    return data;


  },







  upload: async (formData) => {


    const { data } = await api.post(

      "/gallery",

      formData,

      {

        headers: {

          "Content-Type": "multipart/form-data"

        }

      }

    );


    return data;


  },








  delete: async (id) => {


    const { data } = await api.delete(

      `/gallery/${id}`

    );


    return data;


  }



};