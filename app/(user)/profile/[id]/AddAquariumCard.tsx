'use client'

import React from 'react'
import Icon from '@/public/plus.png'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { usePocket } from "@/app/AuthContext"

function AddAquariumCard() {
  const router = useRouter()
  const { user } = usePocket()

  const onClick = () => {
    router.push(`/profile/${user.id}/addAquarium`)
  }

  return (
    <div 
      onClick={onClick}
      className="bg-slate-100 rounded-full p-2 shadow-md 
      hover:cursor-pointer hover:bg-slate-300 transition-all duration-100"
    >
      <Image src={Icon} width={50} height={10} alt=""
        className="max-w-[25px] max-h-[25px]"
      />
    </div>
  )
}

export default AddAquariumCard