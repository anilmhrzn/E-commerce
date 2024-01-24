import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import FloatingCartButton from "./Cart/FloatingCartButton";
import { CartContextProvider } from "./Store/CartContext";
import { CategoriesProvider } from "./Store/CategoriesContext";
import { ClickedCategoryProvider } from "./Store/ClickedCategoriesContext";

const App = () => {
  return (
    <>
      <CategoriesProvider>
        <ClickedCategoryProvider>
          <Header />
          <CartContextProvider>
            <Outlet />
            <FloatingCartButton />
          </CartContextProvider>
        </ClickedCategoryProvider>
        <Footer />
      </CategoriesProvider>
    </>
  );
};

export default App;
