export type FishResponse = {
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