import Restraucard from "./Restraucard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Usercontxt from "../Utils/Usercontxt";
import { useContext } from "react";


const Body=()=>{
   
   const[searchText,setSearchText] =useState("");
   const[filteredRestaurant , setFilteredRestaurant]=useState([]);
   const[List,setList]=useState([]);  

   const {loggedIn,setUserName}=useContext(Usercontxt);
   console.log(loggedIn);
   
   useEffect(()=>{
   // fetchData() ;
  },[]);

  const fetchData=async()=>{
      const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     )
     const json = await data.json();
      console.log(json);
      setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   }

   const OnlineStatus =useOnlineStatus();
   if(OnlineStatus===false){
      return(<h2>you are offline . Please check your internet .!!</h2>)
   }   
    

    return List.length == 0 ?<Shimmer/>:
    (
        <div>
          <div className="m-1 p-2">
             <input  type="text"
               className=" border to-blue-700 px-1 rounded-lg"
               value={searchText}
               onChange={(e)=>{setSearchText(e.target.value)}} 
                />
                                                 
             <button className="bg bg-red-800 px-1 m-1 rounded-md"
             onClick={()=>{ 
                  const filter = List.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filter);
             }}>Search</button>
             
             <button className=" bg-sky-500/50 ...  rounded-md px-1" onClick={()=>{
               setFilteredRestaurant( List.filter((e)=>e.info.avgRating>4.0)
               );                

             }}>Top Rated restaurant</button>

             <div className=" flex">
                <label className=" bg-rose-500 rounded-lg mx-1 px-1">UserName</label>
                <input className="border border-l-blacksd rounded-lg px-1" 
                value={loggedIn}
                onChange={(e)=>setUserName(e.target.value)} />
             </div>
          </div>

            <div  className="flex flex-wrap">           
              { 
                filteredRestaurant.map((resCard)=><Link key={resCard.info.id} to={"/restrauMenu/"+resCard.info.id}><Restraucard  resData={resCard}/></Link>)
              }
            </div>

        </div>
    )
}

export default Body ;