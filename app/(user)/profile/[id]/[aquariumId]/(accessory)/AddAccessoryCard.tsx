'use client'

import React, { useState } from 'react'
import Icon from '@/public/plus.png'
import Image from "next/image"
import { addToAquarium } from '@/actions/serverActions'
import { useRouter } from 'next/navigation'

function AddAccessoryCard(props: any) {
  const [ isAddingAccessory, setIsAddingAccessory ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const router = useRouter()

  const onClick = () => {
      setIsAddingAccessory(!isAddingAccessory)
  }

  const onSubmit = async (e: FormData) => {
    const res = await addToAquarium(e, props.aquariumId, "Accessory")
    if (!res) setIsError(true)
    router.refresh()
  }

  if (isAddingAccessory === true) {
    return (
      <form 
        className='flex flex-col gap-3'
        action={onSubmit}
      >
        <input 
          type="text" 
          name='name'
          placeholder='Nazwa'
          onChange={() => setIsError(false)}
          className={`p-2 text-slate-800 focus:ring-2 focus:ring-sky-700 rounded-md outline-none transition-all duration-75
          ${isError ? "ring-4 ring-pink-700 focus:ring-4 focus:ring-pink-700" : ""}`}
        />
        <input 
          type="submit" 
          value="Dodaj"
          className={`p-2 bg-sky-700 hover:bg-sky-500 active:bg-sky-600 outline-none rounded-md
          transition-all duration-100`}
        />
      </form>
    )
  }

  return (
    <div 
        onClick={onClick}
        className="bg-slate-100 rounded-full p-2 shadow-md 
        hover:cursor-pointer hover:bg-slate-300 transition-all duration-100
        active:bg-slate-200"
    >
        <Image src={Icon} width={50} height={10} alt=""
            className="max-w-[100] max-h-[100]"
        />
    </div>
  )
}

export default AddAccessoryCard