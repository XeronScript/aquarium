'use client'

import { usePocket } from '@/app/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function RegisterForm() {
    const router = useRouter()
    const { register }= usePocket()
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await register(
            formData.name,
            formData.email,
            formData.password,
            formData.confirmPassword
        )
        router.push("/login")
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
                placeholder='Imię/Nick' 
                name="name"
                type='text'
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'
            />
            <input 
                placeholder='Email' 
                name="email"
                type='email'
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'
            />
            <input 
                placeholder='Hasło'
                name="password"
                type='password'
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'
            />
            <input 
                placeholder='Potwierdź Hasło'
                name="confirmPassword"
                type='password'
                onChange={onInputChange}
                className='border-b-2 border-b-gray-400 pl-1 my-1 h-10 text-black text-lg 
                focus:outline-none focus:border-b-gray-700 focus:border-b-3'
            />
            <button 
                type='submit'
                className='w-fit my-1 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-lg
                hover:bg-lightBlue transition-all duration-300'
            >
                Register
            </button>
        </form>
    )
}

export default RegisterForm