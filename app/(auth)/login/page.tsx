import React from 'react'
import Image from 'next/image';
import rybka from '@/public/aquaurim_logo.png'
import Link from 'next/link';
import LoginForm from './LoginForm';


export default function Login() {
    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            {/* {isLoading ? <PacmanLoader color="#06d667"/> : null} */}
            <div className=''>
            <div className="p-10 flex flex-col items-center rounded-2xl bg-white">
                <Image src={rybka} alt='Rybka logo' width={400}/>
                <LoginForm />
                <p className="text-black mt-10">
                    {"Don't"} have an account yet?
                    <Link href="/register" className="ml-1 text-blue-600">
                        Register Here
                    </Link>
                </p>
            </div>
            </div>
        </div>
    )
}
