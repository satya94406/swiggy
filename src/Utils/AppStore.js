import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import searchReducer from "./searchSlice"; 

const AppStore= configureStore({
        reducer:{
            cart:CartSlice,
            search: searchReducer,
        }
});
 

export default AppStore ;