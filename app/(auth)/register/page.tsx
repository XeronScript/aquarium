import React from 'react'
import Image from 'next/image';
import rybka from '@/public/aquaurim_logo.png'
import RegisterForm from './RegisterForm';
import Link from 'next/link';

export default function Login() {
    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            <div className="p-10 flex flex-col items-center rounded-2xl bg-white">
                <Image src={rybka} alt='Rybka logo' width={400}/>
                <RegisterForm />
                <p className="text-black mt-10">
                    Have an account already?
                    <Link href="/login" className="ml-1 text-blue-600">
                        Login Here
                    </Link>
                </p>
            </div>
        </div>
    )
}
