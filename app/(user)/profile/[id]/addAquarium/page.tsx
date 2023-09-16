'use client'

import { usePocket } from '@/app/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function AddAquariumPage(props: any) {
    const { pb, user } = usePocket()
    const router = useRouter()
    const [ formData, setFormData ] = useState({
        name: "",
        fishName: "",
        accessoryName: ""
    })

    console.log(props)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const fishName = formData.fishName
        const accessoryName = formData.accessoryName

        const fishRes = (await pb.collection('fishes').getFirstListItem(`name="${fishName}"`)).id
        const accessoryRes = (await pb.collection('accessories').getFirstListItem(`name="${accessoryName}"`)).id
        const data = {
            "owner": user.id,
            "accessories": [
                accessoryRes
            ],
            "fishes": [
                fishRes
            ],
            "name": formData.name
        }
        const res = await pb.collection('aquariums').create(data)
        router.push(`/profile/${user.id}`)
    }

  return (
    <div className='h-screen flex max-w-2xl m-auto items-center justify-center'>
        <form className='grid grid-rows-3 gap-3 text-slate-700' onSubmit={onSubmit}>
        <input 
            type="text" 
            name='name'
            onChange={onChange}
            placeholder='Nazwa akwarium'
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700'/>
            <input 
            type="text" 
            name='fishName'
            onChange={onChange}
            placeholder='Nazwa ryby'
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700'/>
            <input 
            type="text" 
            name='accessoryName'
            onChange={onChange}
            placeholder='Nazwa akcesorium'
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-700'/>
            <input 
            type="submit"
            value="Dodaj"
            className='text-slate-100 p-2 bg-sky-700 rounded-md outline-none drop-shadow-md
            hover:bg-sky-500 active:bg-sky-600 active:drop-shadow-none transition-all duration-100'
        />
        </form>
    </div>
  )
}

export default AddAquariumPage