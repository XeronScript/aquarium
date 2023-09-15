import React, {Suspense} from "react";
import FishCard from "./FishCard";
import {PacmanLoader} from "react-spinners";
import { FishResponse, PocketBaseFishResponse } from "@/typings";


async function getAllRecords(): Promise<PocketBaseFishResponse> {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/fishes/records?perPage=10',
        { cache: "no-cache" }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function FishCatalog() {
    const fishArray: Array<FishResponse> = (await getAllRecords()).items

    return (
        // <Suspense fallback={<PacmanLoader color="#36d7b7" />}>
            <div className='flex flex-row flex-wrap min-h-screen w-screen py-16 items-center justify-center'>
                {fishArray?.map((fish: FishResponse) => (
                    <FishCard {...fish} key={fish.id}/>
                ))}
            </div>
        // </Suspense>
    );
}
