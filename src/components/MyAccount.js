import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link, Outlet, useLocation} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import Account_details from "./Account_details";

const MyAccount=()=>{
  const[loginBtn,setloginBtn]=useState("login");
  const online =useOnlineStatus();
  const location = useLocation();;
  const CartItems =useSelector((store)=>
      store.cart.item
  );
  
  console.log(CartItems);

  useEffect(()=>{
    console.log("loginBtn");
  },[]);

    return(
      <>
      <div className="h-16 flex items-center justify-between w-full lg:w-4/5 lg:mx-auto">
      <div className="flex items-center">
            <img className="w-36 h-12 mx-2" alt="sat" src={LOGO_URL} />
          </div>
          <div className="flex items-center">
            <ul className="flex p-2 m-1 " >
              <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="hidden lg:block" to="/swiggyCorporate">Swiggy Corporate</Link></li> 
              <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="hidden lg:block" to="/search">Search</Link></li> 
              <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="hidden lg:block" to="/offers">Offers</Link></li> 
              <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="hidden lg:block" to="/help">Help</Link></li>
              <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="" to="/cart">Cart{CartItems.length}</Link></li>
               <button className="px-4 font-sans font-semibold  hover:text-white hover:bg-slate-400 rounded-lg" onClick={()=>{
                loginBtn==="login"?setloginBtn("logout"):setloginBtn("login")}
                }> {loginBtn}  </button>
            </ul>
          </div>
      </div>
      {location.pathname === "/myAccount" && <Account_details/>}
      <Outlet/>
      </>
    )
}

export default MyAccount ;


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" >
//      <div className="flex items-center">
//        <img className="w-36 h-12 mx-2" alt="sat" src={LOGO_URL} />
//        <h1 className="px-4 font-sans font-semibold text-lg">My Account</h1>
//      </div>
//   </a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <ul className="flex p-2 m-1 navbar-nav" >
//               <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="Link" to="/swiggyCorporate">Swiggy Corporate</Link></li> 
//               <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="Link" to="/search">Search</Link></li> 
//               <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="Link" to="/offers">Offers</Link></li> 
//               <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="Link" to="/help">Help</Link></li>
//               <li className="px-4 font-sans font-semibold text-lg hover:text-white hover:bg-slate-400 rounded-lg"><Link className="Link" to="/cart">Cart{CartItems.length}</Link></li>
//                <button className="px-4 font-sans font-semibold  hover:text-white hover:bg-slate-400 rounded-lg" onClick={()=>{
//                 loginBtn==="login"?setloginBtn("logout"):setloginBtn("login")}
//                 }> {loginBtn}  </button>
//             </ul>
//   </div>
// </nav>
