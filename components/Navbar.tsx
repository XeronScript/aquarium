import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-[#00bfff] fixed flex flex-row justify-between w-screen text-lg'>
        <div className='px-5 py-2'>
            {/* Left side nav links */}
            <Link href={'/'}>Strona główna</Link>
            <Link href={'/'} className='ml-9'>Katalog ryb</Link>
            <Link href={'/'} className='ml-9'>Akcesoria</Link>
        </div>
        <div className='px-5 py-2'>
            {/* Right side nav links */}
            <Link href='/login'>Zaloguj</Link>
        </div>
    </nav>
  )
}
