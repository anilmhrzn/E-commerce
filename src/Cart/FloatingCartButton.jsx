import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {  useCart } from "../Store/CartContext";
import { useState } from "react";
import AlertMsg from "../Components/AlertMsg";
const FloatingCartButton = () => {
  const {noOfItemsInCart}=useCart();
const navigate=useNavigate();
const [showAlert, setShowAlert] = useState(false);

// Function to show the alert for a certain duration
// const showAlertForDuration = () => {
 
// };
const cartClicked=()=>{
  if(noOfItemsInCart<=0){
    setShowAlert(true);

    // Hide the alert after 3000 milliseconds (adjust as needed)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  
    // alert("Your Cart is Empty");
    // return('hello')
  }else{
    navigate('/cart')
  }
}
  return (
    <>
    {showAlert && <AlertMsg message={'There is nothing in the cart please add some thing'} />}
    <div className="fixed bottom-4 right-4 p-2  rounded-full cursor-pointer bg-blue-500" onClick={()=>cartClicked()}>
      <div className="relative ">
        <div className="t-0 absolute  right-0">
          <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
            {noOfItemsInCart}
          </p>
        </div>
        <IoMdCart className="text-4xl text-white" />
      </div>
    </div>
    </>

  );
};

export default FloatingCartButton;
