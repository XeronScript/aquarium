'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Image from "next/image";
import { Fish } from '@/typings';
import { MdDelete } from "react-icons/md"
import { usePocket } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';


function FishCard(props: any) {
  const { user, pb } = usePocket()
  const router = useRouter()

  const onClick = async () => {
    const aquariumRes = await pb.collection('aquariums').getOne(props.aquariumId)
    const newFishes = aquariumRes.fishes
      .filter((fish: string) => fish !== props.id)
    const data = {
      "owner": user.id,
      "accessories": aquariumRes.accessories,
      "fishes": newFishes,
      "name": aquariumRes.name
    }
    const res = await pb.collection('aquariums').update(aquariumRes.id, data)
    router.refresh()
  }
  
  return (
    <Card className='max-w-sm'>
        <CardHeader className='flex justify-center'>
            <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
            width={200}
            height={200}
            alt=''
            />
        </CardHeader>
        <Divider />
        <CardBody className='text-sm sticky bottom-0'>
            <h1 className='text-lg font-bold text-center'>{props.name}</h1>
            <p><strong className='text-md'>Pochodzenie:</strong> {props.origin}</p>
            <p><strong className='text-md'>Środowisko:</strong> {props.environment}</p>
            <p><strong className='text-md'>Rodzina: </strong> {props.family}</p>
            <p><strong className='text-md'>Rozmiar: </strong> {props.size}</p>
            <p><strong className='text-md'>Zachowanie: </strong> {props.behavior}</p>
            <p><strong className='text-md'>Wielkość akwarium:</strong> {props.aquarium_size}</p>
            <p><strong className='text-md'>Temperatura wody:</strong> {props.water_temperature}</p>
            <p><strong className='text-md'>Ph wody:</strong> {props.water_ph}</p>
            <p><strong className='text-md'>Twardość wody:</strong> {props.water_toughness}</p>
            <p><strong className='text-md'>Pożywienie: </strong> {props.food}</p>
        </CardBody>
        <Divider />
        <CardFooter className='w-full flex justify-center hover:bg-red-500 transition-all duration-100'
          onClick={onClick}
        >
          <MdDelete />
        </CardFooter>
    </Card>
  )
}

export default FishCard