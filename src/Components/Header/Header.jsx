import { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./CategoriesButton";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import logo from "./../../assets/logo.png";
const Header = () => {
  // this state is used for dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* this ul is for nav bar */}
      <ul className="flex  flex-row-reverse items-center  border-b-2 py-5">
        {/* <li className="mr-6 flex justify-center items-center  text-white bg-slate-600 rounded-full h-7 w-7 ">
          <MdOutlineShoppingCart />
           TODO: make this shopping cart work 
        </li> */}
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>
        </li>

        {/* categories component is rendered sending isopen state and toggleDropdown function as props to make dropdown work */}
        <Categories isOpen={isOpen} toggleDropdown={toggleDropdown} />
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">
            Home
          </Link>
        </li>
        {/* <li className="ml-6 w-full">
          <img src={logo} className="h-10" alt="company logo" />
        </li> */}
      </ul>
    </>
  );
};

export default Header;
