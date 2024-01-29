import { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import Usercontxt from "../Utils/Usercontxt";

const Restraucard=(props)=>{
     console.log(props);
    const {loggedIn}=useContext(Usercontxt);
 
    const {
        cloudinaryImageId,
        name,
        avgRating,
        sla:{deliveryTime},
    }=props.resData.info 

    return(
        <div className="m-4 w-[120px] h-90  bg-pink-50 rounded-lg hover:bg-pink-400">
            <div >
                <img  src={ CDN_URL+cloudinaryImageId}/>
            </div>

            <div>
                <h6 className="font-bold py-1">{name}</h6>
                <h6>{avgRating}</h6>
                <h6>delivery Time:{deliveryTime}min</h6>
            </div>
        </div>
    )
}



export default Restraucard ;