import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import CategoriesContext, {
  ClickedCategories,
} from "./Store/CategoriesContext";
import { useEffect, useState } from "react";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesClicked, setCategoriesClicked] = useState("");
  const fetchAndUpdateCategories = (data) => {
    setCategories(data);
  };

  const handleCategoryClick = (category) => {
    localStorage.setItem("categoriesClicked", JSON.stringify(category));
    setCategoriesClicked(category);
  };
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        fetchAndUpdateCategories(data);
      });
  }, []);
  return (
    <>
      <CategoriesContext.Provider
        value={{ categories, fetchAndUpdateCategories }}
      >
        <ClickedCategories.Provider
          value={{ categoriesClicked,setCategoriesClicked, handleCategoryClick }}
        >
          <Header />
          <Outlet />
        </ClickedCategories.Provider>
        <Footer />
      </CategoriesContext.Provider>
    </>
  );
};

export default App;
