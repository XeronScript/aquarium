import { Aquarium } from '@/typings'
import React, { useEffect } from 'react'
import AquariumCard from './AquariumCard'
import AddAquariumCard from './AddAquariumCard'


const fetchAquariums = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/aquariums/records', {
        cache: "no-cache",
        next: {
            tags: ["aquariums"]
        }
    })
    return res.json()
}

async function AquariumView() {
    const aquariums: Aquarium[] = []

    const res = await fetchAquariums()
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