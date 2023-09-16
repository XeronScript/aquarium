'use client'

import { usePocket } from '@/app/AuthContext'
import React, { useState } from 'react'
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';
import Avatar from "@/public/user.png"

function Profile() {
    const { user } = usePocket()
    const router = useRouter()
    const [ avatar, setAvatar ] = useState<string | StaticImageData>(`http://127.0.0.1:8090/api/files/${user?.collectionId}/${user?.id}/${user?.avatar}`)

    // if (user === null) {
    //     router.push("/")
    // }

    const changeAvatar = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setAvatar(Avatar)
    }

  return (
    <div className='flex justify-center items-center'>
        <Image 
          src={avatar} 
          alt=""
          width={200}
          height={200} 
          onError={changeAvatar}
        />
        <div className={`flex flex-col min-h-[500px] p-16 justify-center items-start text-black text-xl`}>
            <p className={`text-bold text-3xl py-2`}>{user?.username}</p>
            <p>Email: {user?.email}</p>
        </div>
    </div>
  )
}

export default Profile
