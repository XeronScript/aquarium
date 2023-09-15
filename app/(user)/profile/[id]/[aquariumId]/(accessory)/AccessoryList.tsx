import { Accessory, Aquarium } from '@/typings'
import React from 'react'
import AccessoryCard from './AccessoryCard'
import AddAccessoryCard from './AddAccessoryCard'

const fetchAquarium = async (aquariumId: string) => {
    const aquariumRes = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        cache: "no-cache"
    })
    return aquariumRes.json()
}

const fetchAccessories = async (ids: string[]) => {
    const filter = ids.map(id => `id='${id}'`).join(' || ')
    const res = await fetch(`http://127.0.0.1:8090/api/collections/accessories/records?filter=(${filter})`, {
        cache: "no-cache"
    })
    return res.json()
}


async function AccessoryList(props: any) {
    const aquariumRes: Aquarium = await fetchAquarium(props.aquariumId)
    const accessories: Accessory[] = (await fetchAccessories(aquariumRes.accessories)).items
    
  return (
    <div className='flex flex-wrap gap-4 items-center'>
        { accessories &&
            accessories.map(accessory => {
                return (
                    <AccessoryCard 
                        key={accessory.id}
                        {...accessory}
                        aquariumId={ aquariumRes.id }
                    />
                )
            })
        }
        <AddAccessoryCard aquariumId={aquariumRes.id}/>
    </div>
  )
}

export default AccessoryList