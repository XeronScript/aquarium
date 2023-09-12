import React from "react";
import Image from "next/image";


export default function AccessoryCard(props: Accessory) {
    return (
        <div className="flex flex-col flex-wrap items-center m-10 w-[500px] h-[700px]
        rounded-3xl bg-white text-black drop-shadow-lg overflow-hidden p-16 space-y-3">
            <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
                   alt='Rybka.png'
                   width={500}
                   height={250}/>
            <p className="text-2xl line-clamp-2 max-w-[500px] text-center">{props.name}</p>
            
            <p className="text-md line-clamp-4 max-w-[500px] text-center">{props.description}</p>
        </div>
    );
}
