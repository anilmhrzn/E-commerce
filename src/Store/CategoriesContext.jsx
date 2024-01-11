/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CategoriesContext = createContext([]);


export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const fetchAndUpdateCategories = (data) => {
        setCategories(data);
    };
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
          .then((res) => res.json())
          .then((data) => {
            fetchAndUpdateCategories(data);
          });
      }, []);
  return (
    <CategoriesContext.Provider value={{ categories, fetchAndUpdateCategories }}>{children}
        </CategoriesContext.Provider>
  )
}
const useCategories=()=>{
    return useContext(CategoriesContext)
}
// export default CategoriesContext
export default useCategories;

