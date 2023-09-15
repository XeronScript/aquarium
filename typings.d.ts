export type Fish = {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string

    image: string
    name: string
    origin: string
    environment: string
    family: string
    size: string
    behavior: string
    aquarium_size: number
    water_temperature: number
    food: string
    water_ph: string
    water_toughness: string
}

export type Accessory = {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string

    name: string
    description: string
    image: string
}

export type Aquarium = {
    id: string,
    collectionId: string,
    collectionName: string,
    created: string,
    updated: string,

    name: string,
    owner: string,
    accessories: string[],
    fishes: string[]
}

export type User = {
    id: string,
    collectionId: string,
    collectionName: string,

    avatarUrl: string,
    email: string,
    username: string,
}

export type FishOrAccessory = "Fish" | "Accessory"