'use client'

import React from 'react'
import Link from 'next/link';
import { usePocket } from "@/app/AuthContext";

export default function Navbar() {
    const { user, logout } = usePocket()

    let rightNavBar = (
        <Link href="/login" className="px-4">Zaloguj</Link>
    )
    if (user) {
        rightNavBar = (
            <div>
                <Link href={`/profile/${user.id}`} className="px-4">Profil</Link>
                <Link href="/" className="px-4" onClick={logout}>Wyloguj</Link>
            </div>
        )
    }

    return (
        <nav
            className="fixed z-10 flex items-center justify-between p-4 bg-blue-600 text-lg w-screen drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
            <div className="flex items-center">
                <Link href="/" className="px-4">Strona Główna</Link>
                <Link href="/katalog_ryb" className="px-4">Katalog Ryb</Link>
                <Link href="/accessories" className="px-4">Akcesoria</Link>
            </div>
            {rightNavBar}
        </nav>
    )
}
