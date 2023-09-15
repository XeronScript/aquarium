'use client'

import React, { useState } from 'react'
import { usePocket } from '../AuthContext'

function AddFishPage() {
    const { pb } = usePocket()
    const [ formData, setFormData ] = useState({
        name: "",
        origin: "",
        environment: "",
        family: "",
        size: "",
        behaviour: "",
        aquarium_size: "",
        water_temperature: "",
        water_parameters: "",
        food: "",
        image: File,
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = e.currentTarget.elements
        const name = (data[0] as HTMLInputElement).value
        const origin = (data[1] as HTMLInputElement).value
        const environment = (data[2] as HTMLInputElement).value
        const family = (data[3] as HTMLInputElement).value
        const size = (data[4] as HTMLInputElement).value
        const behaviour = (data[5] as HTMLInputElement).value
        const aquarium_size = (data[6] as HTMLInputElement).value
        const water_temperature = (data[7] as HTMLInputElement).value
        const water_parameters = (data[8] as HTMLInputElement).value
        const food = (data[9] as HTMLInputElement).value
        const image = (data[10] as HTMLInputElement).value

        pb.collection("fishes").create()
    }

  return (
    <div className='min-h-screen max-w-3xl m-auto justify-center items-center'>
        <form className='grid grid-cols-2 gap-4 p-4' onSubmit={onSubmit}>
            <input 
            type="text"
            name="name"
            onChange={onChange}
            placeholder='Nazwa'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="origin"
            onChange={onChange}
            placeholder='Pochodzenie'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="environment"
            onChange={onChange}
            placeholder='Środowisko'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="family"
            onChange={onChange}
            placeholder='Rodzina'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="size"
            onChange={onChange}
            placeholder='Rozmiar'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="behaviour"
            onChange={onChange}
            placeholder='Zachowanie'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="aquarium_size"
            onChange={onChange}
            placeholder='Wielkość akwarium'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="water_temperature"
            onChange={onChange}
            placeholder='Temperatura wody'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="water_parameters"
            onChange={onChange}
            placeholder='Parametry wody'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="food"
            onChange={onChange}
            placeholder='Pokarm'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="file"
            name="image"
            onChange={onChange}
            className="border-2 border-sky-700 outline-none rounded-md p-2 text-slate-800 col-span-2"
            />
            <input 
            type="submit"
            value="Dodaj"
            onClick={() => {}}
            className='outline-none bg-sky-700 rounded-md col-span-2 py-2'
            />
        </form>
    </div>
  )
}

export default AddFishPage
