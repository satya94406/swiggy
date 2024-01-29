import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

console.log(CartSlice)

const AppStore= configureStore({
        reducer:{
            cart:CartSlice
        }
});
 

export default AppStore ;