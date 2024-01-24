import { useCart } from "../Store/CartContext";
import { IoMdArrowBack } from "react-icons/io";

// import {useHistory} from 'react-router-dom';

import ProductinCart from "./ProductinCart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  // const history=useHistory()

  const { goBack, noOfItemsInCart, subTotal } = useCart();
  useEffect(() => {
    if (noOfItemsInCart <= 0) {
      navigate("/");
    }
  }, [navigate, noOfItemsInCart]);
  return (
    <>
      <button
        onClick={goBack}
        type="button"
        className=" float-end  mr-3 flex items-center justify-center  px-5 py-2 text-sm text-gray-700  bg-white  rounded-lg gap-x-2    hover:underline"
      >
        <IoMdArrowBack />
        <span>Go back</span>
      </button>
      {noOfItemsInCart == 0 ? (
        <div className="min-h-56 flex justify-center items-center">
          no items in cart add smthng
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
          <ProductinCart />
          <div className="flex justify-end items-center mt-8">
            <span className="text-gray-600 mr-4">Subtotal:</span>
            <span className="text-xl font-bold">{subTotal}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
