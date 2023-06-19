'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import rybka from '@/public/aquaurim_logo.png'
import {loginWithEmailAndPassword} from "@/api/pocketbaseAPI";
import {FieldValues, useForm} from "react-hook-form";
import {PacmanLoader} from "react-spinners";
import {json} from "stream/consumers";
import {useAuth} from "@/app/AuthContext";
import {useRouter} from "next/navigation";


export default function Login() {
    const [isLoading, setLoading] = useState(false)
    const {register, handleSubmit} = useForm()
    const { login, user } = useAuth()
    const { push } = useRouter()

    async function onSubmit(data: FieldValues) {
        setLoading(true)
        try {
            const auth = await loginWithEmailAndPassword(data.email, data.password)
            console.log(auth)
            login(auth.record)
            push(`/profile/${auth.record.id}`)
        } catch (e) {
            console.log('Error in login in.')
        }
        setLoading(false)
    }

    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            {isLoading ? <PacmanLoader color="#06d667"/> : null}
            <div className="p-10 flex flex-col items-center rounded-2xl bg-white">
                <Image src={rybka} alt='Rybka logo' width={400}/>
                <form className={`flex flex-col items-center`} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder='Email' {...register('email')}
                           className='border-b-2 border-b-gray-400 pl-1 my-1
                       h-10 text-black text-lg focus:outline-none'/>
                    <input type="password" placeholder='Password' {...register('password')}
                           className='border-b-2 border-b-gray-400 pl-1 my-1
                       h-10 text-black text-lg focus:outline-none'/>
                    <button type='submit'
                            className={`w-fit my-1 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-lg
                        hover:bg-lightBlue hover:border-transparent
                        transition-all duration-300 disabled:${isLoading}`}>
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
                <p className="text-black mt-10">
                    Don't have an account yet?
                    <a href="/register" className="ml-1 text-blue-600">
                        Register Here
                    </a>
                </p>
            </div>
        </div>
    )
}
