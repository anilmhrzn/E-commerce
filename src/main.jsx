import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Login, { signin } from './Components/Login/Login.jsx'
import Home from './Components/Home.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Cart from './Components/Cart/Cart.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    }
    ,{
      path:'/categories/:categoryName',
      element:<Categories/>
    }
    ,{
      path:'/cart',
      element:<Cart/>
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
  </React.StrictMode>,
)
