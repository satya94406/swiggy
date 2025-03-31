import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link, Outlet} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { setSearchText } from "../Utils/searchSlice";

const Header=()=>{
  const[loginBtn,setloginBtn]=useState("login");
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const online =useOnlineStatus();

  const CartItems =useSelector((store)=>
      store.cart.item
  );

  useEffect(()=>{
    console.log("loginBtn");
  },[]);

    return(
      <>
      <div className="relative w-full lg:w-4/5 lg:mx-auto">
      <div className="hidden lg:block absolute bottom-0 w-full border-b-2 border-gray-300"></div>
      <div className="h-16 w-full  flex items-center justify-between">
      <div className="flex items-center">
        <div >
          <img className="w-36 h-12 mx-2" alt="sat" src={LOGO_URL} />
        </div>
      
        <div className="hidden lg:flex items-center ml-2 font-semibold text-lg">
          🚀 Setup your precise location
          <FaChevronDown className="ml-2" />
        </div>
       </div>
       
        <div className="flex relative">
           <div className="hidden lg:flex relative w-full">
             <input
               className="bg-[rgb(240,240,245)] rounded-lg p-3 pr-10 outline-none "
               placeholder="Search for restaurants and foods"
               value={searchText}
               onChange={(e) => dispatch(setSearchText(e.target.value))}
             />
             <CiSearch className="absolute cursor-pointer right-3  top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
           </div>
           <Link className="Link" to="/myAccount">
           <FaUserAlt className="w-16 h-12 ml-4 cursor-pointer text-gray-700"/>
           </Link>     
        </div>
      </div>
      </div>
      <div className="lg:hidden w-full m-2 text-lg font-semibold flex items-center">
          🚀 Setup your precise location
          <FaChevronDown className="ml-2" />
      </div>
        <div className="lg:hidden relative w-full ">
          <input
            className="bg-[rgb(240,240,245)] mx-2 rounded-lg p-2 pr-10 outline-none w-full"
            placeholder="Search for restaurants and foods"
            value={searchText}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
          />
          <CiSearch className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
        </div>
      <Outlet/>
      </>
    )
}

export default Header ;




// import { useEffect, useState } from "react";
// import { LOGO_URL } from "../Utils/constants";
// import { Link, Outlet} from "react-router-dom";
// import useOnlineStatus from "../Utils/useOnlineStatus";
// //import Usercontxt from "../Utils/Usercontxt";
// //import { useContext } from "react";
// import { useSelector } from "react-redux";

// const Header=()=>{
//   const[loginBtn,setloginBtn]=useState("login");
//   const online =useOnlineStatus();

//   const CartItems =useSelector((store)=>
//       store.cart.item
//   );

  
  
//   console.log(CartItems);

//   useEffect(()=>{
//     console.log("loginBtn");
//   },[]);

//   //const {loggedIn} = useContext(Usercontxt) ;

//     return(
//       <>
//       <div className="flex justify-between bg-pink-200 sm:bg-green-300 ">
//           <div>
//             <img className="w-20" alt="sat" src={LOGO_URL}/>
//           </div>
//           <div className="flex items-center">
//             <ul className="flex p-2 m-1 " >
//               <li className="px-2.5"> Online Status {online?"🟢":"🔴"} </li>
//               <li className="px-2.5"><Link className="Link"  to="/">Home</Link></li> 
//               <li className="px-2.5"><Link className="Link" to="/About">About</Link></li> 
//               <li className="px-2.5"><Link className="Link" to="/Contact">Contact</Link></li> 
//               <li className="px-2.5"><Link className="Link" to="/Grocery">Grocery</Link></li>
//               <li className="px-2.5"><Link className="Link" to="/Cart">Cart-{CartItems.length}items</Link></li>
//                <button className="login" onClick={()=>{
//                 loginBtn==="login"?setloginBtn("logout"):setloginBtn("login")}
//                 }> {loginBtn}  </button>
//             </ul>
//           </div>
//       </div>
//       <Outlet/>
//       </>
//     )
// }

// export default Header ;