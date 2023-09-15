'use client'

import React, { useState } from 'react'
import { usePocket } from '../AuthContext'

function AddAccessoryPage() {
  const { pb } = usePocket()
  const [ image, setImage ] = useState<File>(new File([], ''))
  const [ formData, setFormData ] = useState({
    name: "",
    description: ""
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.elements

    const name = (input[0] as HTMLInputElement).value
    const description = (input[1] as HTMLInputElement).value
    
    const data = new FormData()
    data.set('name', name)
    data.set('description', description)
    data.set('image', image)

    await pb.collection("accessories").create(data)
  }

  return (
    <div className='min-h-screen max-w-2xl m-auto justify-center items-center p-5'>
      <form className='grid grid-cols-1 gap-4 justify-center items-center'
      onSubmit={onSubmit}
      >
        <input 
        placeholder='Nazwa akcesorium'
        type="text" 
        onChange={onChange}
        className='p-2 outline-none border-2 border-slate-400 rounded-md text-slate-800
        focus:ring-2 focus:ring-sky-700'
        />
        <input 
        placeholder='Opis'
        type="text"
        onChange={onChange}
        className='p-2 outline-none border-2 border-slate-400 rounded-md text-slate-800
        focus:ring-2 focus:ring-sky-700'/>
        <input 
        type="file"
        onChange={e => setImage(e.target.files![0])}
        className='border-2 border-sky-700 p-2 rounded-md text-slate-800'
        />
        <input 
        type="submit" 
        value="Dodaj" 
        className='border-none outline-none bg-sky-700 p-2 rounded-md py-2 drop-shadow-sm
        hover:bg-sky-700/50 active:drop-shadow-none transition-all duration-100'
        />
      </form>
    </div>
  )
}

export default AddAccessoryPage