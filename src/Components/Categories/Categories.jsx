import {  useEffect, useState } from "react";
// import { ClickedCategories } from "../../Store/CategoriesContext";
import Products from "../Products/Products";
import { useNavigate, useParams } from "react-router-dom";
import { useClickedCategory } from "../../Store/ClickedCategoriesContext";

const Categories = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const { categoriesClicked, setCategoriesClicked } = useClickedCategory();
  useEffect(() => {
    let storedClickedCategories;
    if (categoryName) {
      setCategoriesClicked(categoryName);
      storedClickedCategories = categoryName;
    }

    fetch(`https://dummyjson.com/products/category/${storedClickedCategories}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.products.length === 0) {
          // show page not found
          navigate("/404");
        }
        setProducts(data.products);
      });
  }, [categoriesClicked]);
  return (
    <>
      <div className="flex items-center dark:bg-gray-800 dark:text-gray-100">
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-gray-400 dark:text-violet-400"
        >
          {categoriesClicked.toUpperCase()}
        </a>
      </div>
      <div className="grid grid-cols-1 z-20 md:grid-cols-3 lg:grid-cols-3 bg-slate-200 ">
        <Products products={products} />
      </div>
    </>
  );
};

export default Categories;
