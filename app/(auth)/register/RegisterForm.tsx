'use client'

import { usePocket } from '@/app/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm() {
    const router = useRouter()
    const { register }= usePocket()
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const chujWieCoTo = await register(formData.email, formData.password)
        console.log(chujWieCoTo)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={onSubmit} className='flex flex-col items-center'>
            <input 
                placeholder='Email' 
                name="email"
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'/>
            <input 
                placeholder='Password'
                name="password"
                type='password'
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'/>
            <button type='submit'
                className='w-fit my-1 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-lg
                hover:bg-lightBlue transition-all duration-300'>
                    Register
            </button>
        </form>
    )
}

export default RegisterForm