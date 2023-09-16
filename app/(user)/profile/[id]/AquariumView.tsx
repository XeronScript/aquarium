import { Aquarium } from '@/typings'
import React from 'react'
import AquariumCard from './AquariumCard'
import AddAquariumCard from './AddAquariumCard'


const fetchAquariums = async (id: string) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records?filter=(owner='${id}')`, {
        cache: "no-cache",
        next: {
            tags: ["aquariums"]
        }
    })
    return res.json()
}

async function AquariumView(props: any) {
    const aquariums: Aquarium[] = []

    const res = await fetchAquariums(props.userId)
    res.items.map((item: Aquarium) => {
        aquariums.push({...item})
    })

  return (
    <div className='flex gap-4 items-center'>
        {
            aquariums.map(aquarium => {
                return (
                    <AquariumCard key={aquarium.id} {...aquarium}/>
                )
            })
        }
        <AddAquariumCard />
    </div>
  )
}

export default AquariumView