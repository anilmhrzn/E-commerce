/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ClickedCategoriesContext = createContext({
  clickedCategory: "",
  setCategoriesClicked: () => {},
  handleCategoryClick: () => {},
});
export const ClickedCategoryProvider = ({ children }) => {
  const [categoriesClicked, setCategoriesClicked] = useState("");
  const handleCategoryClick = (category) => {
    localStorage.setItem("categoriesClicked", JSON.stringify(category));
    setCategoriesClicked(category);
  };
  return (
    <ClickedCategoriesContext.Provider
      value={{
        categoriesClicked,
        setCategoriesClicked,
        handleCategoryClick,
      }}
    >
      {children}
    </ClickedCategoriesContext.Provider>
  );
};
export const useClickedCategory = () => {
  return useContext(ClickedCategoriesContext);
};
