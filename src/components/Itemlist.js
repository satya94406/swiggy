import { AddItem, removeItem } from "../Utils/CartSlice";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";

const Itemlist=({items})=>{ 

    console.log(items)

    const dispatch = useDispatch();
    
    const handleClickItem1=(ite)=>{
        return  dispatch(AddItem(ite))
    }

    const handleClickItem2=(ite)=>{
        return  dispatch(removeItem(ite))
    }

    return(
        <div>
            {items.map((item)=>(
            <div className="flex justify-between   shadow-lg  p-2   text-left">

                <div className=" text-slate-800 w-9/12  ">
                  <span>{item.card.info.name} </span> <br/>
                  <span>-₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</span><br/>
                  <span className="text-xs text-slate-500 "> {item.card.info.description}</span>
                </div>
                <div className="w-3/12 p-4 ">
                 <div className="absolute">
                    <button className="bg-gray-900 text-zinc-50 text-xs rounded-md shadow-lg my-0" onClick={()=>handleClickItem1 (item)}>
                        ADD+
                    </button>
                    <button className="bg-gray-900 text-zinc-50 text-xs rounded-md shadow-lg my-0" onClick={()=>handleClickItem2 (item)}>
                        SUB-
                    </button>
                 </div>
                  <img src={CDN_URL+ item.card.info.imageId} />
               </div>
            </div>
            ))}
        </div>
    )
}

export default Itemlist;

