import React, {Suspense} from "react";
import FishCard from "@/components/FishCard";
import {PacmanLoader} from "react-spinners";
import AccessoryCard from "@/components/AccessoryCard";


async function getAllRecords(): Promise<PocketBaseResponse> {
    const res = await fetch('http://127.0.0.1:8090/api/collections/accessories/records?perPage=10')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function FishCatalog() {
    const accessoryArray: Array<Accessory> = (await getAllRecords()).items

    return (
        <Suspense fallback={<PacmanLoader color="#36d7b7" />}>
            <div className='flex flex-row flex-wrap min-h-screen w-screen py-16 items-center justify-center'>
                {accessoryArray?.map((accessory: Accessory) => (
                    <AccessoryCard {...accessory} key={accessory.id}/>
                ))}
            </div>
        </Suspense>
    )
}
