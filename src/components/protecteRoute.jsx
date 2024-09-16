import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthoContext";

export const ProtecteRoute = ({children}) => {
    const {auth} = useAuth();
    if (!auth) {
        return <Navigate to="/login" />
    }
    return children;
}
export default ProtecteRoute;


