import React from 'react'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <ItemNavbar referent="/" itemcontent="Clase 1 - React"/>
            <ItemNavbar referent="Inicio" itemcontent='Clase 2...'/>
            <ItemNavbar/>
            <ItemNavbar/>
        </ul>
      </nav>
  )
}
