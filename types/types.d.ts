type Fish = {
    image: string,
    name: string,
    price: number,
    size: number,
    aquarium_capacity: number,
    water_temperature: number,
    water_toughness: number,
    collection_id: string
}

type FishResponse = {
    aquarium_capacity: number
    collectionId: string
    collectionName: string
    created: string
    id: string
    image: string
    name: string
    price: number
    size: number
    updated: string
    water_temperature: number
    water_toughness: number
}

type Accessory = {
    collectionId: string
    collectionName: string
    created: string
    description: string
    id: string
    image: string
    name: string
    price: number
    updated: string
}
