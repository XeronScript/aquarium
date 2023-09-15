'use client'

import React from 'react'
import Link from 'next/link';
import { usePocket } from "@/app/AuthContext";
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const { user, logout } = usePocket()
    const router = useRouter()

    const redirect = (key: React.Key) => {
        switch(key) {
            case 'profile':
                router.push(`/profile/${user.id}`)
                break;
            case 'addFish':
                router.push('/addFish')
                break;
            case 'addAccessory':
                router.push('/addAccessory')
                break;
            case 'logout':
                logout()
                router.push('/')
                break;
        }
    }

    let rightNavBar = (
        <Link href="/login" className="px-4">Zaloguj</Link>
    )
    if (user) {
        rightNavBar = (
            <div>
                {/* <Link href={`/profile/${user.id}`} className="px-4">Profil</Link>
                <Link href="/" className="px-4" onClick={logout}>Wyloguj</Link> */}
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar src={`http://127.0.0.1:8090/api/files/${user?.collectionId}/${user?.id}/${user?.avatar}`}/>
                    </DropdownTrigger>
                    <DropdownMenu
                        onAction={(key) => redirect(key)}
                    >
                        <DropdownItem key="profile" className='text-slate-700'>Profil</DropdownItem>
                        <DropdownItem key="addFish" className='text-slate-700'>Dodaj Rybę</DropdownItem>
                        <DropdownItem key="addAccessory" className='text-slate-700'>Dodaj akcesorium</DropdownItem>
                        <DropdownItem key="logout" className='text-danger'>Wyloguj</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }

    return (
        <nav
            className="sticky z-10 flex items-center justify-between p-4 bg-blue-600 text-lg w-screen drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
            <div className="flex items-center">
                <Link href="/" className="px-4">Strona Główna</Link>
                <Link href="/katalog_ryb" className="px-4">Katalog Ryb</Link>
                <Link href="/accessories" className="px-4">Akcesoria</Link>
            </div>
            {rightNavBar}
        </nav>
    )
}
