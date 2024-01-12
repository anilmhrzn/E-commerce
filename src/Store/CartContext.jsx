/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const CartContext = createContext({itemsInCart:[],setItemsInCart:()=>{},noOfItemsInCart:Number,subTotal:Number,setSubTotal:()=>{}})

export const CartContextProvider=({children})=>{
    const [itemsInCart, setItemsInCart] = useState([]);
    const [subTotal, setSubTotal] = useState(Number(0));
    return <CartContext.Provider
    value={{
      itemsInCart,
      setItemsInCart,
      noOfItemsInCart: itemsInCart.length,
      subTotal,
      setSubTotal
    }}
  >
{children}
  </CartContext.Provider>
}
export const useCart=()=>{return useContext(CartContext);}