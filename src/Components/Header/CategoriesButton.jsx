/* eslint-disable react/prop-types */

// import { useContext } from "react";
// import CategoriesContext from "../../Store/CategoriesContext";
import Category from "./CategoryForCategoriesButton";
import { FaCaretDown } from "react-icons/fa";
import useCategories from "../../Store/CategoriesContext";

const CategoriesButton = ({ isOpen, toggleDropdown }) => {
  const { categories } = useCategories();

  return (
    <>
      {/* <li className="mr-6 z-20 "> */}
        <div className="relative inline-block text-left ">
          <button
          onMouseEnter={toggleDropdown}
          onClick={toggleDropdown}
            className="flex  justify-center items-center text-blue-500 hover:text-blue-800"
          >
            Categories
            {/* this is for icon */}
            <FaCaretDown />
          </button>

          {isOpen && (
            <div className="origin-top-right absolute -left-44 mt-2 w-80 lg:-left-96 lg:min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onMouseLeave={()=>{toggleDropdown();}}>
              <div
                className="py-1 grid grid-cols-2 lg:grid-cols-3 gap-4 px-2 border-solid  border-blue-400 border-2 whitespace-nowrap"
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
      {/* </li> */}
    </>
  );
};
export default CategoriesButton;
