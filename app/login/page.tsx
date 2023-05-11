'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import rybka from '@/public/aquaurim_logo.png'

export default function Login() {
  return (
    <div className='w-1/4 h-1/2 flex flex-col justify-center items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border border-slate-700 rounded-md shadow-xl'>
        <Image src={rybka} alt='Rybka logo' width={350} height={350}/>
        <input type="text" placeholder='Email' className='border pl-1 my-1 mt-4 focus:outline-none border-slate-500 rounded-md h-8'/>
        <input type="password" placeholder='Password' className='border pl-1 my-1 focus:outline-none border-slate-500 rounded-md h-8'/>
        <button onClick={() => {}} className='border w-fit my-1 py-1 px-2 rounded-md hover:bg-[#00bfff] hover:border-transparent transition-all border-slate-500'>Login</button>
    </div>
  )
}
