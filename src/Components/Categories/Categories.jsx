import { useContext, useEffect, useState } from "react"
import { ClickedCategories } from "../../Store/CategoriesContext"

const Categories = () => {
   const [products,setProducts]= useState([]);
    const {categoriesClicked}=useContext(ClickedCategories)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${categoriesClicked}`)
.then(res => res.json())
.then((data)=>setProducts(data.products));
            
    },[categoriesClicked])
  return (<>
    {products.map((item)=>(<li key={item.id}>{item.title}</li>))}
  </>
  )
}

export default Categories