'use client'

import React from 'react'
import Link from 'next/link';

export default function Login() {
  return (
    <div className='w-1/4 h-1/2 flex flex-col justify-center items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border border-slate-700 rounded-md shadow-xl'>
        <input type="text" placeholder='Email' className='border pl-1 my-1 focus:outline-none'/>
        <input type="text" placeholder='Password' className='border pl-1 my-1 focus:outline-none'/>
        <button onClick={() => {}} className='border w-fit my-1 py-1 px-2 rounded-md hover:bg-slate-400 transition-all'>Login</button>
    </div>
  )
}
