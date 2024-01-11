// import React from 'react'

// import { } from "react"
import {  useCart } from "../../Store/CartContext";
// import { CartContext } from "../../Store/CategoriesContext"

const Cart = () => {
    const {itemsInCart} = useCart();
  return (<>
    {itemsInCart.map((items)=>(
        <li key={items.title+items.id}>{items.title}</li>
    ))}
  </>
  )
}

export default Cart