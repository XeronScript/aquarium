'use client'

import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Image from "next/image";
import { MdDelete } from "react-icons/md"
import { usePocket } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';

function AccessoryCard(props: any) {
  const { user, pb } = usePocket()
  const router = useRouter()

  const onClick = async () => {
    const aquariumRes = await pb.collection('aquariums').getOne(props.aquariumId)
    const newAccessories = aquariumRes.accessories
      .filter((acc: string) => acc !== props.id)
    const data = {
      "owner": user.id,
      "accessories": newAccessories,
      "fishes": aquariumRes.fishes,
      "name": aquariumRes.name
    }
    const res = await pb.collection('aquariums').update(aquariumRes.id, data)
    router.refresh()
  }

  return (
    <Card className='max-w-md'>
        <CardHeader className='flex justify-center'>
            <Image src={`http://127.0.0.1:8090/api/files/${props.collectionId}/${props.id}/${props.image}`}
            width={200}
            height={200}
            alt=''
            />
        </CardHeader>
        <Divider />
        <CardBody className='text-sm text-center'>
            <h1 className='text-lg font-bold'>{props.name}</h1>
            <p>{props.description}</p>
        </CardBody>
        <Divider />
        <CardFooter 
          className='w-full flex justify-center hover:bg-red-500 transition-all duration-100' 
          onClick={onClick}
        >
          <MdDelete />
        </CardFooter>
    </Card>
  )
}

export default AccessoryCard