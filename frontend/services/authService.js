import api from "./api";

import {

  TOKEN_KEY,

  USER_KEY

} from "@/utils/constants";





export const authService = {





  // REGISTER


  register: async (userData) => {


    const { data } = await api.post(

      "/auth/register",

      userData

    );


    return data;


  },








  // LOGIN


  login: async (credentials) => {


    const { data } = await api.post(

      "/auth/login",

      credentials

    );




    if (data.token) {


      localStorage.setItem(

        TOKEN_KEY,

        data.token

      );



      localStorage.setItem(

        USER_KEY,

        JSON.stringify(data.user)

      );


    }




    return data;


  },









  // LOGOUT


  logout: () => {


    localStorage.removeItem(

      TOKEN_KEY

    );



    localStorage.removeItem(

      USER_KEY

    );


  },










  getToken: () => {


    if (typeof window === "undefined")

      return null;



    return localStorage.getItem(

      TOKEN_KEY

    );


  },











  getUser: () => {


    if (typeof window === "undefined")

      return null;




    try {


      return JSON.parse(

        localStorage.getItem(USER_KEY)

      );

    }


    catch {


      return null;


    }



  },









  isAuthenticated: () => {


    if (typeof window === "undefined")

      return false;



    return !!localStorage.getItem(

      TOKEN_KEY

    );


  }



};