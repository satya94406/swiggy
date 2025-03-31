import Restraucard from "./Restraucard";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Usercontxt from "../Utils/Usercontxt";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../Utils/searchSlice";
import Footer from "./Footer";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";

const Body=()=>{
   
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.search.searchText);   const[filteredRestaurant , setFilteredRestaurant]=useState([]);
  const[List,setList]=useState([]);  
  const scrollbarRef = useRef(null);

  const scrollLeft = () => {
    scrollbarRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollbarRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };


  useEffect(()=>{
   fetchData() ;
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

   useEffect(() => {
    const filtered = List.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  }, [searchText, List]);

   const OnlineStatus =useOnlineStatus();
   if(OnlineStatus===false){
      return(<h2>you are offline . Please check your internet .!!</h2>)
   }   
    

    return List.length == 0 ?<Shimmer/>:
    (  
     <div>
        <div className="w-full lg:w-4/5 lg:mx-auto">
          <div>
             <button className=" bg-sky-500/50 m-2 py-2 px-4  rounded-md" onClick={()=>{
               setFilteredRestaurant( List.filter((e)=>e.info.avgRating>4.0)
               );                

             }}>Top Rated restaurant</button>
            </div>
            <div className="relative">
              <div className="object-cover pr-7">
                <img className="w-full m-4" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"/>
              </div>
              <div className="absolute bottom-6 text-white ml-10 font-extrabold text-xl lg:text-6xl">
                 <h1>Order Food From MSIT College❤️</h1>
              </div>
            </div>

            <div className="relative">
              <div  className="flex justify-between">
                <h1 className="font-extrabold text-xl lg:text-3xl ml-6 mt-3 ">Satya, what's on your mind?</h1> 
                <div className="flex absolute right-0 mr-4">
                  <HiArrowCircleLeft  className="w-12 lg:w-16 h-12 lg:h-16 cursor-pointer" onClick={scrollLeft}/>
                  <HiArrowCircleRight className="w-12 lg:w-16 h-12 lg:h-16 cursor-pointer" onClick={scrollRight}/>
                </div>
              </div>   
              <div className="flex mx-4 mb-2 pb-5 overflow-x-scroll overflow-y-hidden scrollbar-hide" ref={scrollbarRef}>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'/></div>
                 <div className="w-28 lg:w-52 h-28 lg:h-52 cursor-pointer shrink-0"><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png'/></div>
              </div>
            </div>

            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">           
              { 
                filteredRestaurant.map((resCard)=><Link key={resCard.info.id} to={"/restrauMenu/"+resCard.info.id}><Restraucard  resData={resCard} /></Link>)
              }
            </div>
        </div>
          <Footer/>
       </div>

    )
}

export default Body ;