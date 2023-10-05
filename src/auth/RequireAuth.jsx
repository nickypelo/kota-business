import React, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context.jsx/AuthContext";

const RequireAuth = () =>{

    const {user} = useContext(AuthContext);

    const redirect = useLocation();

    return(
        user 
            ?   <Outlet/>
            :   <Navigate to='/login' state={{from:redirect}} replace/>

    )
}

export default RequireAuth;