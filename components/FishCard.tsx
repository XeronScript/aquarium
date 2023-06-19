import React from "react";
import Image from "next/image";

export default function FishCard(props: FishResponse) {
    return (
        <div className="flex flex-col flex-wrap items-center overflow-hidden
        m-10 min-w-[400px] min-h-[500px] rounded-2xl bg-white text-black drop-shadow-lg">
            <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
                   alt='Rybka.png'
                   width={500}
                   height={200}/>
            <p className="text-2xl">{props.name}</p>
            <br/>
            <p>Wielkość rybki: {props.size}cm</p>
            <p>Minimalna pojemność akwarium: {props.aquarium_capacity}l</p>
            <p>Minimalna temeratura: {props.water_temperature}*C</p>
            <p>Minimalna twardośc wody: {props.water_toughness}*dGH</p>
        </div>
    );
}
