import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import CategoriesContext, {
  ClickedCategories,
} from "./Store/CategoriesContext";
import { useEffect, useState } from "react";
// import Home from "./Components/Home"

const App = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesClicked, setCategoriesClicked] = useState("");
  const fetchAndUpdateCategories = (data) => {
    setCategories(data);
  };
  const handleCategoryClick = (category) => {
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
          value={{ categoriesClicked, handleCategoryClick }}
        >
          <Header />
          <Outlet />
        </ClickedCategories.Provider>
      </CategoriesContext.Provider>
      <Footer />
    </>
  );
};

export default App;
