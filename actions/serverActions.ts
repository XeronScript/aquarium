'use server'

import { Accessory, Aquarium, Fish, FishOrAccessory } from "@/typings"

const fetchUsersAccessory = async (userId: string) => {
    const aquarium = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records?filer=(owner="${userId}")`)
    console.log(aquarium)
}

export const deleteAquariumsAccessory = async (accessoryId: string, aquariumId: string) => {
    const aquariumRes = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        cache: "no-cache"
    })
    const aquarium: Aquarium = await aquariumRes.json()
    const newAccessories = aquarium.accessories
        .filter(accessory => accessory !== accessoryId)

    const data = {
        "owner": aquarium.owner,
        "accessories": newAccessories,
        "fishes": aquarium.fishes,
        "name": aquarium.name
    }
    const res = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/:${aquariumId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application-json",
        }
    })

    return await res.json()
}

export const addToAquarium = async (e: FormData, aquariumId: string, whatToAdd: FishOrAccessory) => {
    switch(whatToAdd) {
        case "Accessory":
            return await addAccessoryToAquarium(e, aquariumId)
        case "Fish":
            return await addFishToAquarium(e, aquariumId)
    }
}

const addFishToAquarium = async (e: FormData, aquariumId: string)  => {
    const fishName = e.get('name')?.toString()
    if (!fishName || fishName.length === 0) {
        return false
    }

    const fishRes = await fetch(`http://127.0.0.1:8090/api/collections/fishes/records?filter=(name='${fishName}')`)
    if (!fishRes.ok) return false
    const fish: Fish = (await fishRes.json()).items[0]
    if (!fish) return false

    const aquariumRes = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        cache: "no-cache"
    })
    if (!aquariumRes.ok) return false
    const aquarium: Aquarium = await aquariumRes.json()
    if (!aquarium) return false

    const newFishes = aquarium.fishes
    newFishes.push(fish.id)

    const data = {
        "owner": aquarium.owner,
        "fishes": newFishes,
    }
    const res = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return true
}

const addAccessoryToAquarium = async (e: FormData, aquariumId: string)  => {
    const accessoryName = e.get('name')?.toString()
    if (!accessoryName || accessoryName.length === 0) {
        return false
    }

    const accessoryRes = await fetch(`http://127.0.0.1:8090/api/collections/accessories/records?filter=(name='${accessoryName}')`)
    if (!accessoryRes.ok) return false
    const accessory: Accessory = (await accessoryRes.json()).items[0]
    console.log(accessory)
    if (!accessory) return false

    const aquariumRes = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        cache: "no-cache"
    })
    if (!aquariumRes.ok) return false
    const aquarium: Aquarium = await aquariumRes.json()
    if (!aquarium) return false

    const newAccessories = aquarium.accessories
    newAccessories.push(accessory.id)

    const data = {
        "owner": aquarium.owner,
        "accessories": newAccessories,
    }
    const res = await fetch(`http://127.0.0.1:8090/api/collections/aquariums/records/${aquariumId}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return true
}