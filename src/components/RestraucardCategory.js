import React from "react";
//import { useState } from "react";
import Itemlist from "./Itemlist";
const RestraucardCategory=({data,show,setShowIndex,dumm})=>{
console.log(setShowIndex);
console.log(show);
console.log(data);

const handleClick=()=>{
    setShowIndex()
};

    return(
 <div className="bg-gray-60 w-6/12 shadow-xl mx-auto my-2">
  <div className="flex cursor-pointer justify-between" onClick={handleClick}>
        <div className=" font-bold text-stone-950">
            {data.title}({data.itemCards.length})
        </div>
        <div>
          <p>↓</p>
        </div>
  </div>
        {show && <Itemlist items={data.itemCards} />}
 </div>
    )
}

export default RestraucardCategory;