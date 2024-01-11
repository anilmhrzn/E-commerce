/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({itemsInCart:[],setItemsInCart:()=>{},noOfItemsInCart:Number})

export const CartContextProvider=({children})=>{
    const [itemsInCart, setItemsInCart] = useState([]);
    return <CartContext.Provider
    value={{
      itemsInCart,
      setItemsInCart,
      noOfItemsInCart: itemsInCart.length,
    }}
  >
{children}
  </CartContext.Provider>
}
export const useCart=()=>{return useContext(CartContext);}