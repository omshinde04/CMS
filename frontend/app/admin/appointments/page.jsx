"use client";


import ProtectedRoute from "@/components/admin/ProtectedRoute";

import AppointmentPage from "@/components/admin/AppointmentPage";





export default function AdminAppointmentsPage() {



    return (


        <ProtectedRoute requiredRole="admin">


            <AppointmentPage />


        </ProtectedRoute>


    );



}