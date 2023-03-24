import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [state, handleState] = useState({
        isAuth: true,
        token: null
    })
    const loginUser = (payload) => {
        handleState({
            ...state,
            isAuth: true,
            token: payload
        })
    }
    const logoutUser = () => {
        handleState({
            ...state,
            isAuth: false,
            token: null
        })
    }
    return (
        <AuthContext.Provider value={{state,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
