'use client'

import { NextUIProvider } from "@nextui-org/react"
import { PocketProvider } from "./AuthContext"

export function Providers({children}: {children: React.ReactNode}) {
    return (
        <NextUIProvider>
            <PocketProvider>
                {children}
            </PocketProvider>
        </NextUIProvider>
    )
}