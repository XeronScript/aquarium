'use client'

import React, {useState} from 'react'
import Image from 'next/image';
import rybka from '@/public/aquaurim_logo.png'

export default function Login() {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    // @ts-ignore
    const onInputChange = (e) => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            <div className="p-10 flex flex-col items-center rounded-2xl bg-white">
                <Image src={rybka} alt='Rybka logo' width={400}/>
                <input type="text" placeholder='Email' name="email" value={input.email}
                       onChange={onInputChange}
                       className='border-b-2 border-b-gray-400 pl-1 my-1
                       h-10 text-black text-lg focus:outline-none'/>
                <input type="password" placeholder='Password' name="password" value={input.password}
                       onChange={onInputChange}
                       className='border-b-2 border-b-gray-400 pl-1 my-1
                       h-10 text-black text-lg focus:outline-none'/>
                <button onClick={() => {}}
                        className='w-fit my-1 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-lg
                        hover:bg-lightBlue hover:border-transparent
                        transition-all duration-300'>
                    Register
                </button>
                <p className="text-black mt-10">
                    Have an account already?
                    <a href="/login" className="ml-1 text-blue-600">
                        Login Here
                    </a>
                </p>
            </div>
        </div>
    )
}
