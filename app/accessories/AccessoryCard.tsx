import React from "react";
import Image from "next/image";
import { Accessory } from "@/typings";


export default function AccessoryCard(props: Accessory) {
    return (
        <div className="flex flex-col flex-wrap items-center overflow-hidden
        m-10 w-[500px] h-[600px] rounded-2xl bg-white text-black drop-shadow-lg">
            <div className="min-w-[500px] max-w-[500px] min-h-[400px] max-h-[400px]">
                <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
                   alt='Rybka.png'
                   width={500}
                   height={250}
                   className="w-[500px] h-[400px]"/>
            </div>
            <p className="text-2xl line-clamp-2 max-w-[500px] text-center">{props.name}</p>
            <p className="text-md line-clamp-4 max-w-[500px] text-center">{props.description}</p>
        </div>
    );
}
