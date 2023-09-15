'use client'

import { usePocket } from '@/app/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LoginForm() {
  const [ isLoading, setLoading ] = useState(false)
  const { login, user } = usePocket()
  const { push } = useRouter()
  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    setLoading(true)
    try {
      const obj = await login(email, password)
      setLoading(false)
      push(`/profile/${obj.record.id}`)
    } catch (e) {
      setLoading(false)
      console.log('Error in login in.')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
  }

  return (
    <form 
    className={`flex flex-col items-center`} 
    onSubmit={onSubmit}
    >
      <input 
      value={formData.email}
      type="text" 
      placeholder='Email' 
      onChange={onChange}
      className='border-b-2 border-b-gray-400 pl-1 my-1
          h-10 text-black text-lg focus:outline-none'
      />
      <input 
      value={formData.password}
      type="password" 
      placeholder='Password' 
      onChange={onChange}
      className='border-b-2 border-b-gray-400 pl-1 my-1
          h-10 text-black text-lg focus:outline-none'
      />
      <button 
      type='submit'
      className={`w-fit my-1 mt-2 py-2 px-3 rounded-lg bg-blue-600 text-lg
          hover:bg-red
          transition-all duration-300`}>
          {isLoading ? "Loading..." : "Login"}
      </button>
  </form>
  )
}

export default LoginForm