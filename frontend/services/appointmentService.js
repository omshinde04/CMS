import api from "./api";




export const appointmentService = {




  // ================================
  // PUBLIC CREATE APPOINTMENT
  // ================================


  create: async (payload) => {


    const { data } =
      await api.post(

        "/appointments",

        payload

      );



    return data;


  },









  // ================================
  // ADMIN GET ALL
  // ================================


  getAll: async () => {


    const { data } =
      await api.get(

        "/appointments/admin/all"

      );



    return data;


  },









  // ================================
  // ADMIN UPDATE STATUS
  // ================================


  updateStatus: async (id, payload) => {


    const { data } =
      await api.patch(

        `/appointments/status/${id}`,

        payload

      );



    return data;


  }




};