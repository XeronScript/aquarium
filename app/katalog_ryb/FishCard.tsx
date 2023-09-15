import React from "react";
import Image from "next/image";
import { Fish } from "@/typings";

export default function FishCard(props: Fish) {
    return (
        <div className="flex flex-col items-center overflow-clip
        m-10 max-w-2xl rounded-lg bg-white text-black text-sm drop-shadow-lg">
            <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
                   alt='Rybka.png'
                   width={500}
                   height={200}/>
            <div className="p-4 truncate... max-w-[500px]">
                <p className="text-2xl">{props.name}</p>
                <br/>
                <p>
                    <strong>Pochodzenie:{" "}</strong> 
                    {props.origin}
                </p>
                <p>
                    <strong>Środowisko:{" "}</strong>
                    {props.environment}
                </p>
                <p>
                    <strong>Rodzina:{" "}</strong>
                    {props.family}
                </p>
                <p>
                    <strong>Wielkość rybki:{" "}</strong> 
                    {props.size}
                </p>
                <p>
                    <strong>Zachowanie:{" "}</strong>
                    {props.behavior}
                </p>
                <p>
                    <strong>Pojemność akwarium:{" "}</strong> 
                    {props.aquarium_size}
                </p>
                <p>
                    <strong>Temeratura wody:{" "}</strong> 
                    {props.water_temperature}°C
                </p>
                <p>
                    <strong>Ph wody:{" "}</strong>
                    {props.water_ph}
                </p>
                <p>
                    <strong>Twardośc wody:{" "}</strong> 
                    {props.water_toughness}°dGH
                </p>
                <p>
                    <strong>Pożywienie:{" "}</strong>
                    {props.food}
                </p>
            </div>
        </div>
    );
}
