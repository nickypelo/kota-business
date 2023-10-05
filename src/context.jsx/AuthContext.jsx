import React,{ createContext, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState('');


    const userData = {
        user, setUser
    }

    return(
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;