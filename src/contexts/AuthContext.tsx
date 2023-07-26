import React from "react";
import { useState, createContext, ReactNode } from "react";

type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean,
}

type UserProps = {
    username: string, //ou id...
    name: string, 
    email: string,
    token: string,
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        username: '',
        name: '',
        email: '',
        token: ''
    })

    const isAuthenticated = !!user.name; //Se o usuario tiver logado isso vira true, else false


    return(
        <AuthContext.Provider value = {{user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

