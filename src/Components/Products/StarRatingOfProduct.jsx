/* eslint-disable react/prop-types */
// import React from 'react'
import { FaStar } from "react-icons/fa";

const StarRatingOfProduct = ({rating,title}) => {
    const ratingArr= Array.from({length:rating})
    // console.log(ratingArr);
  return (<>
  {/* {ratingArr} */}
  {/* {title} */}
    {ratingArr.map((_,index)=>
    // <li key={title+index}>{index}</li>)}
    
        <FaStar className="text-yellow-400" key={title+index}/>)}
        </>
  )
}

export default StarRatingOfProduct