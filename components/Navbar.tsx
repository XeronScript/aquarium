import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
      <nav className="fixed z-10 flex items-center justify-between p-4 bg-blue-600 text-lg w-screen drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
          <div className="flex items-center">
              <Link href="/" className="px-4">Strona Główna</Link>
              <Link href="/katalog_ryb" className="px-4">Katalog Ryb</Link>
              <Link href="/akcesoria" className="px-4">Akcesoria</Link>
          </div>
          <a href="/login" className="px-4">Zaloguj</a>
      </nav>
  )
}
