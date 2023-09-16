'use client'

import { Aquarium } from '@/typings'
import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react"
import Link from 'next/link'
import { usePocket } from '@/app/AuthContext'
import { MdDelete } from "react-icons/md"
import { useRouter } from 'next/navigation'


function AquariumCard(props: Aquarium) {
    const { pb, user } = usePocket()

    const deleteAquarium = async () => {
        await pb.collection('aquariums').delete(props.id)
    }

  return (
    <Card className='p-2'>
        <CardHeader className='flex justify-between'>
            <p>{props.name}</p>
            <span className='hover:cursor-pointer' onClick={deleteAquarium}><MdDelete/></span>
        </CardHeader>
        <Divider />
        <CardBody>
            <p>Ilość akcesoriów: {props.accessories.length}</p>
            <p>Ilość ryb: {props.fishes.length}</p>
        </CardBody>
        <Divider />
        <CardFooter>
            <Link href={`/profile/${user?.id}/${props.id}`} className='text-sm text-blue-500'>
                Zobacz więcej
            </Link>
        </CardFooter>
    </Card>
  )
}

export default AquariumCard