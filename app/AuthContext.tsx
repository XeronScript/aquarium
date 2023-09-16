'use client'

import {
    createContext,
    useContext,
    useCallback,
    useState,
    useEffect,
    useMemo,
} from "react"
import PocketBase from "pocketbase"
import { useInterval } from "usehooks-ts"
import jwtDecode, { JwtPayload } from "jwt-decode"
import ms from "ms"
import { User } from "@/typings"

interface Props {
    children: React.ReactNode
}

type ResponseType =
    | "Success"
    | "Invalid Email"
    | "Blank Password"
    | "Wrong Password Lenght"
    | "Not Matching Password Confirm"
    | "Existing Username"
    | undefined

interface RegisterResponse {
    type: ResponseType,
    data: any
}



const BASE_URL = "http://127.0.0.1:8090"
const fiveMinutes = ms("5 minutes")
const twoMinutes = ms("2 minutes")

const PocketContext = createContext({})

export const usePocket = () => useContext(PocketContext) as any

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

    const register = useCallback( async (
            name: string,
            email: string,
            password: string,
            passwordConfirm: string
        ): Promise<RegisterResponse | undefined> => {
        const data = {
            "username": name,
            "email": email,
            "emailVisibitility": true,
            "password": password,
            "passwordConfirm": passwordConfirm,
        }

        try {
            const res = await pb.collection("users").create(data)
            return {
                type: "Success",
                data: res
            }
        } catch (e: any) {
            const err = e.data.data
            if (err.hasOwnProperty("email")) {
                return {
                    type: "Invalid Email",
                    data: null
                }
            } else if (err.hasOwnProperty("password")) {
                if (err.password.code === 'validation_length_out_of_range') {
                    return {
                        type: "Wrong Password Lenght",
                        data: null
                    }
                }
                return {
                    type: "Blank Password",
                    data: null
                }
            } else if (err.hasOwnProperty("passwordConfirm")) {
                return {
                    type: "Not Matching Password Confirm",
                    data: null
                }
            } else if (err.hasOwnProperty("username")) {
                return {
                    type: "Existing Username",
                    data: null
                }
            } else {
                return undefined
            }
        }
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
