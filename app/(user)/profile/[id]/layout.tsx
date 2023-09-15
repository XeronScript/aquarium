import { Props } from '@/typings'
import React from 'react'
import AddAquariumForm from './AddAquariumForm'

function RootLayout({ children }: Props) {
  return (
    <div>
        { children } {/* Zmniejszyć konto, dodać opcję edycji */}
        {/* <AddAccessoryForm /> */}
        {/* <AddAquariumForm /> */}
    </div>
  )
}

export default RootLayout