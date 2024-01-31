import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link, Outlet} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
//import Usercontxt from "../Utils/Usercontxt";
//import { useContext } from "react";
import { useSelector } from "react-redux";

const Header=()=>{
  const[loginBtn,setloginBtn]=useState("login");
  const online =useOnlineStatus();

  const CartItems =useSelector((store)=>
      store.cart.item
  );

  
  
  console.log(CartItems);

  useEffect(()=>{
    console.log("loginBtn");
  },[]);

  //const {loggedIn} = useContext(Usercontxt) ;

    return(
      <>
      <div className="flex justify-between bg-pink-200 sm:bg-green-300 ">
          <div>
            <img className="w-20" alt="sat" src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
            <ul className="flex p-2 m-1 " >
              <li className="px-2.5"> Online Status {online?"🟢":"🔴"} </li>
              <li className="px-2.5"><Link className="Link"  to="/">Home</Link></li> 
              <li className="px-2.5"><Link className="Link" to="/About">About</Link></li> 
              <li className="px-2.5"><Link className="Link" to="/Contact">Contact</Link></li> 
              <li className="px-2.5"><Link className="Link" to="/Grocery">Grocery</Link></li>
              <li className="px-2.5"><Link className="Link" to="/Cart">Cart-{CartItems.length}items</Link></li>
               <button className="login" onClick={()=>{
                loginBtn==="login"?setloginBtn("logout"):setloginBtn("login")}
                }> {loginBtn}  </button>
            </ul>
          </div>
      </div>
      <Outlet/>
      </>
    )
}

export default Header ;