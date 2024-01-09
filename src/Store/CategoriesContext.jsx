import { createContext } from "react";

const CategoriesContext = createContext([]);
export default CategoriesContext;

export const ClickedCategories = createContext({ clickedCategory: "" ,setCategoriesClicked:()=>{},handleCategoryClick:()=>{}});
