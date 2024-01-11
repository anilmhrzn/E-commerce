/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {  useClickedCategory } from "../../Store/ClickedCategoriesContext";
// import { ClickedCategories } from "../../Store/CategoriesContext";

const Category = ({ item ,toggleDropdown}) => {
  


  // handleCategoryClick is the fucntion which is taken through context api  to handle the click of the user 
  const { handleCategoryClick }=useClickedCategory()

  return (
    <>
      <Link
        to={`/categories/${item}`}
        className= "w-auto block px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-white hover:bg-gray-800 "
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
