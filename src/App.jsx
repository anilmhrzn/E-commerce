import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
// import Home from "./Components/Home"

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">


    <Header/>
   <Outlet/>
   <Footer/>
    </div>
    </>
  )
}

export default App