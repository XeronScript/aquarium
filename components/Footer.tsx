import React from "react";

export default function Footer() {
    return (
        <div className='flex items-center content-center justify-between px-20 text-lg w-screen
        bg-gradient-to-r from-blue-600 to-pink-400 h-[200px]'>
            <div className="flex items-center">
                <a href="/sponsorzy" className="pr-20 text-2xl">Sponsorzy</a>
                <a href="/o_nas" className="pr-20 text-2xl">O nas</a>
            </div>
            <a href="/faq" className="text-2xl">FAQ</a>
        </div>
    )
}
