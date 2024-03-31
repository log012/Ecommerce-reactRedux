import { createSlice } from "@reduxjs/toolkit";


 const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            if(!state.some(item=>item.id===action.payload.id)){
                state.push(action.payload);
            }
            
        },
        removeFromCart:(state,action)=>{
            const {id}=action.payload;
           return state=state.filter(item=>item.id !== id);
            
        },
        increment: (state, action) =>{
            const {id}=action.payload; 
           let item=state.find(item=>item.id===id);
           if(item){
            item.quantity +=1;
           }
         

        },
          
        decrement: (state, action) =>{
           const {id}=action.payload;
           let item=state.find(item=>item.id === id);
           if(item.quantity >1 && item){
               item.quantity -=1;
           }
        }
    }
})

export const {addItem,removeFromCart,increment,decrement}=cartSlice.actions;
export default cartSlice.reducer;