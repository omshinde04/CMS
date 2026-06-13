import api from "./api";





export const complaintService = {




  // ADMIN - GET ALL COMPLAINTS

  getAll: async () => {


    const { data } = await api.get(

      "/complaints/admin/all"

    );


    return data;


  },








  // ADMIN - UPDATE STATUS


  updateStatus: async (

    id,

    payload

  ) => {



    const { data } = await api.patch(


      `/complaints/status/${id}`,


      payload


    );



    return data;



  },









  // PUBLIC - CREATE COMPLAINT


  create: async (formData) => {



    const { data } = await api.post(


      "/complaints",


      formData,


      {

        headers: {


          "Content-Type":

            "multipart/form-data"


        }


      }


    );



    return data;



  },










  // PUBLIC - TRACK COMPLAINT


  track: async (trackingId) => {



    const { data } = await api.get(


      `/complaints/track/${trackingId}`


    );



    return data;



  }



};