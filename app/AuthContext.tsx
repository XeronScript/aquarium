'use client'

import React, { createContext, useContext, useState } from "react";
import { Record } from "pocketbase";
import { Props, authContextType, User } from "@/typings";


const authContextDefaultValues: authContextType = {
    user: {
        avatarUrl: "",
        collectionId: "",
        collectionName: "",
        email: "",
        id: "",
        username: "",
    },
    login: (auth) => {},
    logout: () => {}
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: Props) {
    const [ user, setUser ] = useState<User>(authContextDefaultValues.user);

    // @ts-ignore
    const login = (auth: Record) => {
        setUser({
            avatarUrl: auth.avatar,
            collectionName: auth.collectionName,
            collectionId: auth.collectionId,
            email: auth.email,
            id: auth.id,
            username: auth.username,
        })
    }

    const logout = () => {
        setUser({
            avatarUrl: "",
            collectionName: "",
            collectionId: "",
            email: "",
            id: "",
            username: "",
        })
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <>
            <AuthContext.Provider value={value} >
                {children}
            </AuthContext.Provider>
        </>
    )
}
