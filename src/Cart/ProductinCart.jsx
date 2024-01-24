import { useCart } from "../Store/CartContext";
// import { MdDelete } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const ProductinCart = () => {
  const { itemsInCart, handleAdd, handleSub, removefromCart } = useCart();

  return (
    <>
      {itemsInCart.map((items, index) => (
        <div key={items.id + items.title + items.category} className="mt-8">
          <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
              <img
                src={items.images[0]}
                alt="Product image"
                className="w-32 h-32 object-cover"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-bold">{items.title}</h2>
              <p className="mt-2 text-gray-600">Product Description</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-gray-600">Quantity:</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 rounded-l-lg px-2 py-1"
                    onClick={() => {
                      handleSub(
                        index,
                        items.price,
                        items.discountPercentage,
                        items.quantity
                      );
                    }}
                  >
                    -
                  </button>
                  <span className="mx-2 text-gray-600">{items.quantity}</span>
                  <button
                    className="bg-gray-200 rounded-r-lg px-2 py-1"
                    //   disabled
                    onClick={() => {
                      handleAdd(
                        index,
                        items.price,
                        items.discountPercentage,
                        items.quantity
                      );
                    }}
                  >
                    +{/*  */}
                  </button>
                </div>
                <div className="flex justify-center items-center gap-10 flex-row  ">
                  <div className="ml-4 font-bold">
                    {Math.round(
                      items.price -
                        items.price * (items.discountPercentage / 100)
                    ) * items.quantity}
                  </div>
                  <RiDeleteBin5Line
                    color="red"
                    className="text-3xl cursor-pointer"
                    onClick={() => removefromCart(items.id)}
                  />
                  {/* color="red"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductinCart;
