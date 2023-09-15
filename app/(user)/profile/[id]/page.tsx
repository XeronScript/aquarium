'use client'

import React from "react";
import Image from "next/image";
import { usePocket } from "@/app/AuthContext";
import { useRouter } from "next/navigation"

export default function UserProfile({ params }: { params: {ip: string} }) {
    const { user } = usePocket()
    const router = useRouter()

    if (user === null) {
        router.push("/")
    }

    return (
        <div className={`flex flex-row min-h-screen w-screen p-16 items-center justify-center`}>
            <Image src={`http://127.0.0.1:8090/api/files/${user?.collectionId}/${user?.id}/${user?.avatar}`} 
            alt="Profile Pic"
            width={200}
            height={200} />
            <div className={`flex flex-col min-h-[500px] p-16 justify-center items-start text-black text-xl`}>
                <p className={`text-bold text-3xl py-2`}>{user?.username}</p>
                <p>Email: {user?.email}</p>
            </div>
        </div>
    )
}
