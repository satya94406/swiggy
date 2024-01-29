import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { ClearCart } from "../Utils/CartSlice";

const Cart=()=>{

    const selectedCartItems = useSelector((store)=>store.cart.item);
    const dispatch =useDispatch ();
    const handleClearCart=()=>{
            dispatch(ClearCart());
    }

    return(
        <>
          <div className="text-center text font-bold w-6/12 my-3 m-auto"> 
           <div className="flex justify-between m-auto">
              <div className="font-extrabold stroke-zinc-200 bg-red-500 px-2  rounded-lg ">
                 Cart
              </div>

              <button className="font-extrabold stroke-zinc-200  bg-orange-200  rounded-lg " 
               onClick={handleClearCart} >
                 Clear  Cart
              </button>
          </div>
             {selectedCartItems.length==0 ? (<h1>This cart is  Empty . Please Add Items !!</h1>):
            (<Itemlist items={selectedCartItems } />)}
          </div> 
        </>
    )
}

export default Cart ;