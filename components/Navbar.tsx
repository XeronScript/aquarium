import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-[#26f0fd] fixed flex flex-row justify-between w-screen'>
        <div className='px-5 py-2'>
            {/* Left side nav links */}
            <Link href={'/'}>Strona główna</Link>
        </div>
        <div className='px-5 py-2'>
            {/* Right side nav links */}
            <Link href='/login'>Zaloguj</Link>
        </div>
    </nav>
  )
}
