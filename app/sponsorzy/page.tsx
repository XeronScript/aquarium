import React from "react";
import Image from "next/image";
import rybki from "@/public/dwie_rybki.png"


export default function Sponsors() {
    return (
        <div className="flex flex-row flex-wrap min-h-screen w-screen py-16 items-center justify-center">
            <Image src={rybki} alt="chikita.gif" width={200} height={200} unoptimized={true} />
        </div>
    )
}
