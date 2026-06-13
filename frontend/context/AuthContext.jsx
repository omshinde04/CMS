"use client";


import {

  createContext,
  useContext,
  useEffect,
  useState

} from "react";


import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";







const AuthContext = createContext(null);








export function AuthProvider({ children }) {



  const router = useRouter();



  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);








  // LOAD USER AFTER REFRESH

  useEffect(() => {



    try {


      const storedUser = authService.getUser();

      const token = authService.getToken();



      if (

        storedUser &&

        token

      ) {


        setUser(storedUser);


      }



    }

    catch (error) {


      console.log(

        "Auth load error",

        error

      );


    }

    finally {


      setLoading(false);


    }




  }, []);









  // LOGIN


  const login = async (credentials) => {



    const data = await authService.login(

      credentials

    );



    setUser(data.user);



    return data;



  };










  // LOGOUT


  const logout = () => {



    authService.logout();



    setUser(null);



    router.replace(

      "/admin/login"

    );



  };










  // ROLE CHECK


  const hasRole = (role) => {


    return user?.role === role;


  };








  const isAdmin = () => {


    return (

      user?.role === "admin" ||

      user?.role === "super_admin"

    );


  };











  return (


    <AuthContext.Provider


      value={{


        user,


        loading,


        login,


        logout,


        hasRole,


        isAdmin


      }}


    >



      {children}




    </AuthContext.Provider>



  );



}









export function useAuth() {



  const ctx = useContext(

    AuthContext

  );



  if (!ctx) {


    throw new Error(

      "useAuth must be used within AuthProvider"

    );


  }



  return ctx;



}