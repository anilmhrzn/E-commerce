import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {  useCart } from "../../Store/CartContext";
const FloatingCartButton = () => {
  const {noOfItemsInCart}=useCart();
const navigate=useNavigate();
  return (
    <div className="fixed bottom-4 right-4 p-2  rounded-full cursor-pointer bg-blue-500" onClick={()=>navigate('/cart')}>
      <div className="relative ">
        <div className="t-0 absolute  right-0">
          <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
            {noOfItemsInCart}
          </p>
        </div>
        <IoMdCart className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default FloatingCartButton;
