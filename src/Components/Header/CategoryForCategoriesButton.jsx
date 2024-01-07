/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClickedCategories } from "../../Store/CategoriesContext";

const Category = ({ item ,toggleDropdown}) => {
  // handleCategoryClick is the fucntion which is taken through context api  to handle the click of the user 
  const { handleCategoryClick }=useContext(ClickedCategories)
  return (
    <>
      <Link
        to={`/categories`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        // onclicking the category the user needs the dropdown must be hidden and the click must be handle by sending item as parameter
      onClick={()=>{toggleDropdown();handleCategoryClick(item)}}
      >
        {item}
      </Link>
    </>
  );
};

export default Category;
