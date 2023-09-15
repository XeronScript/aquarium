import React from "react";
import FishCard from "./FishCard";
import { Fish } from "@/typings";


async function getAllRecords() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/fishes/records?perPage=50',
        { cache: "no-cache" }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function FishCatalog() {
    const fishArray: Array<Fish> = (await getAllRecords()).items

    return (
        <div className='flex flex-row flex-wrap min-h-screen w-screen py-16 items-center justify-center'>
            {fishArray?.map((fish: Fish) => (
                <FishCard {...fish} key={fish.id}/>
            ))}
        </div>
    );
}
