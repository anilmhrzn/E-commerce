import { Link } from "react-router-dom"

const Header = () => {
  return (

    <>

<ul className="flex  flex-row-reverse  border-b-2 py-5">
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="/login">Login</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="/categories">Categories</Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
  </li>
  {/* <li className="mr-6"> */}
    {/* <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a> */}
  {/* </li> */}
</ul>


    {/* <ul className="flex border-b">
    <li className="-mb-px mr-1">
      <Link className="bg-white inline-block  rounded-t py-2 px-4 text-blue-700 font-semibold" to="/">Home</Link>
    </li>
    <li className="mr-1">
      <Link className="bg-white inline-block border-l border-t border-r py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/categories">Tab</Link>
    </li>
    
  </ul> */}
  </>
  )
}

export default Header