'use client'

import React, {createContext, ReactNode, useContext, useState} from "react";
import {Record} from "pocketbase";

type User = {
    avatarUrl: string,
    collectionId: string,
    collectionName: string,
    email: string,
    id: string,
    name: string,
    username: string,
}

type authContextType = {
    user: User,
    login: (auth: Record) => void,
    logout: () => void
}

const authContextDefaultValues: authContextType = {
    user: {
        avatarUrl: "",
        collectionId: "",
        collectionName: "",
        email: "",
        id: "",
        name: "",
        username: "",
    },
    login: (auth) => {},
    logout: () => {}
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
    return useContext(AuthContext)
}

type Props = {
    children: ReactNode
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
            name: auth.name,
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
            name: "",
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
