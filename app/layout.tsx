import './global.css'
import { Roboto } from 'next/font/google'
import React from "react";
import { AuthProvider } from "@/app/AuthContext";
import Navbar from './Navbar';
import Footer from './Footer';


const inter = Roboto({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Aquarium',
  description: 'Aquarium app for managing your personal aquariums 😉',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
