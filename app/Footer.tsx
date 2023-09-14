import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div className='flex items-center content-center justify-between px-20 text-lg w-screen
        bg-gradient-to-r from-blue-600 to-pink-400 h-[200px]'>
            <div className="flex items-center">
                <Link href="/sponsorzy" className="pr-20 text-2xl">Sponsorzy</Link>
                <Link href="/o_nas" className="pr-20 text-2xl">O nas</Link>
            </div>
            <Link href="/faq" className="text-2xl">FAQ</Link>
        </div>
    )
}
