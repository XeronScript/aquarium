'use client'

import React from "react";
import Image from "next/image";
import {useAuth} from "@/app/AuthContext";

export default function UserProfile({ params }: { params: {ip: string}}) {
    const { user } = useAuth()

    console.log(params)
    return (
        <div className={`flex flex-row min-h-screen w-screen p-16 items-center justify-center`}>
            <Image src={`http://127.0.0.1:8090/api/files/${user.collectionId}/${user.id}/${user.avatarUrl}`} alt="Profile Pic" width={200} height={200} />
            <div className={`flex flex-col min-h-[500px] p-16 justify-center items-start`}>
                <p className={`text-2xl font-bold`}>Dane:</p>
                <p>Imię: {user.name}</p>
                <p>Nazwisko: </p>
                <p>Email: {user.email}</p>
                <p>Nick: {user.username}</p>
                <p>Ulubiona ryba: </p>
            </div>
        </div>
    )
}