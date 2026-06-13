import api from "./api";




export const blogService = {




  // ===============================
  // GET ALL BLOGS
  // ===============================


  getAll: async () => {


    const { data } = await api.get(

      "/blogs"

    );


    return data;


  },








  // ===============================
  // CREATE BLOG
  // ===============================


  create: async (payload) => {


    const { data } = await api.post(

      "/blogs",

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










  // ===============================
  // UPDATE BLOG
  // ===============================


  update: async (id, payload) => {


    const { data } = await api.patch(

      `/blogs/${id}`,

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









  // ===============================
  // DELETE BLOG
  // ===============================


  delete: async (id) => {


    const { data } = await api.delete(

      `/blogs/${id}`

    );



    return data;


  }




};