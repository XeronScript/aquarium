'use client'

import React, { useState } from 'react'
import { usePocket } from '../AuthContext'

function AddFishPage() {
    const { pb } = usePocket()
    const [ image, setImage ] = useState<File>(new File([], ''))
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
        const input = e.currentTarget.elements

        const name = (input[0] as HTMLInputElement).value
        const origin = (input[1] as HTMLInputElement).value
        const environment = (input[2] as HTMLInputElement).value
        const family = (input[3] as HTMLInputElement).value
        const size = (input[4] as HTMLInputElement).value
        const behavior = (input[5] as HTMLInputElement).value
        const aquarium_size = (input[6] as HTMLInputElement).value
        const water_temperature = (input[7] as HTMLInputElement).value
        const water_ph = (input[8] as HTMLInputElement).value
        const water_toughness = (input[9] as HTMLInputElement).value
        const food = (input[10] as HTMLInputElement).value

        const data = new FormData()
        data.set('name', name)
        data.set('origin', origin)
        data.set('environment', environment)
        data.set('family', family)
        data.set('size', size)
        data.set('behavior', behavior)
        data.set('aquarium_size', aquarium_size)
        data.set('water_temperature', water_temperature)
        data.set('food', food)
        data.set('water_ph', water_ph)
        data.set('water_toughness', water_toughness)
        data.set('image', image)

        const res = await pb.collection("fishes").create(data)
        console.log(res)
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
            name="water_ph"
            onChange={onChange}
            placeholder='Parametry wody'
            className="border-2 border-slate-300 focus:ring-2 focus:ring-sky-700 outline-none rounded-md p-2
            text-slate-800"
            />
            <input 
            type="text"
            name="water_toughness"
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
            accept='image'
            name="image"
            onChange={e => setImage(e.target.files![0])}
            className="border-2 border-sky-700 outline-none rounded-md p-2 text-slate-800"
            />
            <input 
            type="submit"
            value="Dodaj"
            className='outline-none bg-sky-700 rounded-md col-span-2 py-2 drop-shadow-sm 
            hover:bg-sky-700/50 active:drop-shadow-none transition-all duration-100'
            />
        </form>
    </div>
  )
}

export default AddFishPage
