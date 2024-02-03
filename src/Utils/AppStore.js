import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const AppStore= configureStore({
        reducer:{
            cart:CartSlice
        }
});
 

export default AppStore ;