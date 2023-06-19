import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import React from "react";
import {AuthProvider} from "@/app/AuthContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aquarium',
  description: 'Aquarium app for managing your personal aquariums 😉',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-[#82d7f6] to-[#858ef3] flex-col justify-center`} >
          <AuthProvider>
              <Navbar/>
              {children}
              <Footer/>
          </AuthProvider>
      </body>
    </html>
  )
}
