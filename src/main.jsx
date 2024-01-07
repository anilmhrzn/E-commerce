import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Login, { signin } from './Login/Login.jsx'
import Home from './Components/Home.jsx'
import Categories from './Components/Categories/Categories.jsx'
// import Categories from './Components/Header/CategoriesButton.jsx'
// import Categories from './Components/Categories.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    }
    ,{
      path:'/categories',
      element:<Categories/>
    }
  ]
},{
  path:'/login',
  element:<Login/>,
  action:signin
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
