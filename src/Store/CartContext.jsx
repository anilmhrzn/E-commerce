/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({
  itemsInCart: [],
  setItemsInCart: () => {},
  noOfItemsInCart: Number,
  subTotal: Number,
  setSubTotal: () => {},
  handleSub: () => {},
  handleAdd: () => {},
  addToCart: () => {},
  goBack: () => {},
  removefromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const handleSub = (index, price, discountPercentage, quantity) => {
    if (quantity > 1) {
      setItemsInCart((prevData) => {
        const updatedData = [...prevData];
        updatedData[index] = { ...updatedData[index], quantity: quantity - 1 };
        return updatedData;
      });
      const amount = Math.round(price - price * (discountPercentage / 100));
      setSubTotal((prevState) => [Number(prevState) - amount]);
    }
  };
  const handleAdd = (index, price, discountPercentage, quantity) => {
    setItemsInCart((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], quantity: quantity + 1 };
      return updatedData;
    });
    const amount = Math.round(price - price * (discountPercentage / 100));
    setSubTotal((prevState) => [Number(prevState) + amount]);
  };
  const [subTotal, setSubTotal] = useState(Number(0));
  const addToCart = (item, price, discountPercentage) => {
    const itemAlreadyExists = itemsInCart.some((items) => items.id === item.id);
    if (!itemAlreadyExists) {
      setItemsInCart((prevState) => [...prevState, { ...item, quantity: 1 }]);
      const amount = Math.round(price - price * (discountPercentage / 100));
      setSubTotal((prevState) => [Number(prevState) + amount]);
    }
  };

  const removefromCart = (itemId) => {
    setItemsInCart((prevState) =>
      prevState.filter((item) => item.id !== itemId)
    );

    // const itemAlreadyExists = itemsInCart.some((items) => items.id === item.id);
    // if (!itemAlreadyExists) {
    //   setItemsInCart((prevState) => [...prevState, { ...item, quantity: 1 }]);
    //   const amount = Math.round(price - price * (discountPercentage / 100));
    //   setSubTotal((prevState) => [Number(prevState) + amount]);
    // }
  };
  const navigate = useNavigate();
  const goBack = () => {
    // console.log('press');
    navigate(-1);
  };
  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
        noOfItemsInCart: itemsInCart.length,
        subTotal,
        setSubTotal,
        handleSub,
        handleAdd,
        addToCart,
        goBack,
        removefromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
