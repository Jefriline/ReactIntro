import React from 'react'

export const ItemNavbar = ({ referent, itemcontent = "Item Vacio" }) => {
  return (
    <>
        <li><a href={referent}>{itemcontent}</a></li>
    </>
  )
}
