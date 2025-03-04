import React from "react";
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNavbar referent="/" itemcontent="Clase 1 - React" />
        <ItemNavbar referent="/inicio" itemcontent="Clase 2" />
        <ItemNavbar referent="/contacto" itemcontent="Contacto" />
        <ItemNavbar referent="/sobre-nosotros" itemcontent="Sobre Nosotros" />
      </ul>
    </nav>
  );
};
