import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        AddItem:(state,action)=>{
            state.item.push(action.payload) ;
            console.log(state)
        },
        removeItem:(state,action)=>{
            state.item.pop(action.payload) ;
        },
        ClearCart:(state,action)=>{
            state.item.length=0 ;
        }
    }
});


export  const {AddItem,removeItem,ClearCart} = CartSlice.actions ;

export default CartSlice.reducer ;