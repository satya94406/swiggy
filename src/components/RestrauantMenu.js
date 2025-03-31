import { useState,} from "react";
import Shimmer from "./Shimmer";
import useRestrauantMenu from "../Utils/useRestrauantMenu";
import RestraucardCategory from "./RestraucardCategory";
const RestrauantMenu=()=>{
  const resMenu=useRestrauantMenu();
  const[shoIndex,setShoIndex]=useState(null);

   if (resMenu===null) return <Shimmer/>;
    const name = resMenu?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
    const catagories = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((e)=>{
    return  e.card.card["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   })

   return(
        <div className="text-center font-extrabold ">
          <h1 className="text-blue-500 font-extrabold text-3xl m-2 ">{name}</h1>
            <ul>  
                {
                catagories.
                map((category,index)=>(<RestraucardCategory 
                data={category.card.card}
                show={index===shoIndex?true:false}
                setShowIndex={()=>setShoIndex(index)}
                />))
                }
           </ul>
        </div>
    )
}

export default RestrauantMenu ;