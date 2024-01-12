/* eslint-disable react/prop-types */
import { IoMdCart } from "react-icons/io";
import StarRatingOfProduct from "./StarRatingOfProduct";
import { useCart } from "../../Store/CartContext";
// import { CartContext } from "../../Store/CategoriesContext";
// TODO: implement shake effect when user clicks the add to cart
const Products = ({ products }) => {
  const { setItemsInCart, setSubTotal } = useCart();
  const addToCart = (item, price, discountPercentage) => {
    setItemsInCart((prevState) => [...prevState,{...item,quantity:1} ]);
    const amount =
      Math.round((price - price * (discountPercentage / 100)) * 100) / 100;
      setSubTotal((prevState) => [Number(prevState) + amount]);
  };

  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="object-cover"
              src={item.images[0]}
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {item.discountPercentage}% OFF
            </span>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                {item.title}
                {/* Nike Air MX Super 2500 - Red */}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  {Math.round(
                    (item.price -
                      item.price * (item.discountPercentage / 100)) *
                      100
                  ) / 100}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  {item.price}
                </span>
              </p>
              <div className="flex items-center">
                <StarRatingOfProduct
                  rating={Math.ceil(item.rating)}
                  title={item.title}
                />
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() =>
                addToCart(item, item.price, item.discountPercentage)
              }
            >
              <IoMdCart className="mr-2 h-6 w-6" />
              Add to cart
            </a>
          </div>
        </div>
      ))}
    </>
    // TODO: desigin the product card
  );
};

export default Products;
