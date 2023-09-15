'use client'

import { usePocket } from '@/app/AuthContext'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

function Profile() {
    const { user } = usePocket()
    const router = useRouter()

    if (user === null) {
        router.push("/")
    }

  return (
    <div className='flex justify-center items-center'>
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

export default Profile
