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
    updated: string
}

type User = {
    avatarUrl: string,
    collectionId: string,
    collectionName: string,
    email: string,
    id: string,
    username: string,
}

type authContextType = {
    user: User,
    login: (auth: Record) => void,
    logout: () => void
}

type Props = {
    children: ReactNode
}

type PocketBaseResponse = {
    page: number,
    petPage: number,
    totalItems: number,
    totalPages: number,
    items: Array<Accessory>
}
