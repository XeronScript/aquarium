export type Fish = {
    image: string,
    name: string,
    price: number,
    size: number,
    aquarium_capacity: number,
    water_temperature: number,
    water_toughness: number,
    collection_id: string
}

export type FishResponse = {
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

export type Accessory = {
    collectionId: string
    collectionName: string
    created: string
    description: string
    id: string
    image: string
    name: string
    updated: string
}

export type User = {
    avatarUrl: string,
    collectionId: string,
    collectionName: string,
    email: string,
    id: string,
    username: string,
}

export type authContextType = {
    user: User,
    login: (auth: Record) => void,
    logout: () => void
}

export type Props = {
    children: ReactNode
}

export type PocketBaseAccessoryResponse = {
    page: number,
    petPage: number,
    totalItems: number,
    totalPages: number,
    items: Array<Accessory>
}

export type PocketBaseFishResponse = {
    page: number,
    petPage: number,
    totalItems: number,
    totalPages: number,
    items: Array<FishResponse>
}

export type User = {
    avatarUrl: string,
    collectionId: string,
    collectionName: string,
    email: string,
    id: string,
    name: string,
    username: string,
}

export type authContextType = {
    user: User,
    login: (auth: Record) => void,
    logout: () => void
}

export type Props = {
    children: ReactNode
}
