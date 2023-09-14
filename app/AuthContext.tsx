'use client'

import {
    createContext,
    useContext,
    useCallback,
    useState,
    useEffect,
    useMemo,
    ReactNode
} from "react"
import PocketBase, { RecordAuthResponse, Record } from "pocketbase"
import { useInterval } from "usehooks-ts"
import jwtDecode, { JwtPayload } from "jwt-decode"
import ms from "ms"


const BASE_URL = "http://127.0.0.1:8090"
const fiveMinutes = ms("5 minutes")
const twoMinutes = ms("2 minutes")

const PocketContext = createContext({})

export const usePocket = () => useContext(PocketContext) as any

export type Props = {
    children: ReactNode
}

export function PocketProvider({ children }: Props) {
    const pb = useMemo(() => new PocketBase(BASE_URL), [])

    const [ user, setUser ] = useState(pb.authStore.model)
    const [ token, setToken ] = useState(pb.authStore.token)

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token)
            setUser(model)
        })
    }, [])

    const register = useCallback(async (email: string, password: string) => {
        return await pb
        .collection("users")
        .create({ email, password, passwordConfirm: password })
    }, [])

    const login = useCallback(async (email: string, password: string) => {
        return await pb.collection("users").authWithPassword(email, password)
    }, [])

    const logout = useCallback(() => {
        pb.authStore.clear()
    }, [])

    const refreshSession = useCallback(async () => {
        if (!pb.authStore.isValid || !token) return;
        const decoded = jwtDecode<JwtPayload>(token)
        const tokenExpiration = decoded.exp!
        const expirationWithBuffer = (decoded.exp! + fiveMinutes) / 1000
        if (tokenExpiration < expirationWithBuffer) {
            await pb.collection("users").authRefresh()
        }
    }, [token])

    useInterval(refreshSession, token ? twoMinutes : null)

    const value = {
        register,
        login,
        logout,
        user,
        token,
        pb
    }

    return (
        <PocketContext.Provider value={value}>
            { children }
        </PocketContext.Provider>
    )
}
