import { MENU_API } from "./constants";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestrauantMenu=()=>{
    const[resMenu,setResMenu]=useState(null);
    const{resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
       const FetchMenuData = await fetch(MENU_API+resId);
       const json = await FetchMenuData.json();
       console.log(json);
       setResMenu(json.data);
    }
    return resMenu;
}
export default useRestrauantMenu ;