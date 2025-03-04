import React from "react";
import "./ItemNavbar.css";

export const ItemNavbar = ({ referent, itemcontent = "Item Vacio" }) => {
  return (
    <li>
      <a href={referent}>{itemcontent}</a>
    </li>
  );
};
