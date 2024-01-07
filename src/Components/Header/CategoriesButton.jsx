/* eslint-disable react/prop-types */

import { useContext } from "react";
import CategoriesContext from "../../Store/CategoriesContext";
import Category from "./CategoryForCategoriesButton";
import { FaCaretDown } from "react-icons/fa";

const CategoriesButton = ({ isOpen, toggleDropdown }) => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      <li className="mr-6">
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="flex justify-center items-center text-blue-500 hover:text-blue-800"
          >
            Categories
            {/* this is for icon */}
            <FaCaretDown />
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {/* we get the array of the category from the context api  also toggleDropdown function and each category  is send via props to the category component */}
                {categories.map((item) => (
                  <Category
                    key={item}
                    toggleDropdown={toggleDropdown}
                    item={item}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </li>
    </>
  );
};
export default CategoriesButton;
