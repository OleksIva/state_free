import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthoContext";
import { useSelector } from "react-redux";

export const ProtecteRoute = ({children}) => {
    //const {auth} = useAuth();
    const loggedIn = useSelector(state => state.user.userInfo.loggedIn);
    if (!loggedIn) {
        return <Navigate to="/login" />
    }
    return children;
}
export default ProtecteRoute;


