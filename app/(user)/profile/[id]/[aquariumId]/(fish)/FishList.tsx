import { Fish } from '@/typings'
import React from 'react'
import FishCard from './FishCard'
import AddFishCard from './AddFishCard'

const fetchAquarium = async (aquariumId: string) => {
    const aquariumRes = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        cache: "no-cache"
    })
    return aquariumRes.json()
}

const fetchFishes = async (ids: string[]) => {
    const filter = ids.map(id => `id='${id}'`).join(' || ')
    const res = await fetch(`http://127.0.0.1:8090/api/collections/fishes/records?filter=(${filter})`, {
        cache: "no-cache"
    })
    return res.json()
}


async function FishList(props: any) {
    const aquariumRes = await fetchAquarium(props.aquariumId)
    const fishes: Fish[] = (await fetchFishes(aquariumRes.fishes)).items

  return (
    <div className='flex flex-wrap gap-4 items-center'>
        { fishes &&
            fishes.map(fish => {
                return (
                    <FishCard 
                        key={fish.id}
                        {...fish}
                        aquariumId={aquariumRes.id}
                    />
                )
            })
        }
        <AddFishCard aquariumId={aquariumRes.id}/>
    </div>
  )
}

export default FishList