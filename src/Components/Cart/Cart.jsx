// // import React from 'react'

import { useCart } from "../../Store/CartContext";
import ProductinCart from "./ProductinCart";

// // import { } from "react"
// import {  useCart } from "../../Store/CartContext";
// // import { CartContext } from "../../Store/CategoriesContext"

// const Cart = () => {
//     const {itemsInCart} = useCart();
//   return (<>
//     {itemsInCart.map((items)=>(
//         <li key={items.title+items.id}>{items.title}</li>
//     ))}
//   </>
//   )
// }

// export default Cart

// import React from 'react'

const Cart = () => {
  const { subTotal } = useCart();
// console.log(itemsInCart);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
        <ProductinCart/>
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">{subTotal}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
