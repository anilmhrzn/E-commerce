import { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./CategoriesButton";

const Header = () => {
  // this state is used for dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* this ul is for nav bar */}
      <ul className="flex  flex-row-reverse  border-b-2 py-5">
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
      </ul>
    </>
  );
};

export default Header;
