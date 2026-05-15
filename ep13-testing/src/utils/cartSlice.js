import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            
            // vanilla (older) Redux => Don't Mutate state
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState; // return was mandatory

            // it still happening behind the scene but redux is doing for us


            // Redux toolkit
            // we have to mutate the state
            state.items.push(action.payload)
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearItem: (state, action) =>{

            // RTK - either mutate the existing state or return a new state
           // state.items.length = 0;  // []
            // state.items = [] wont work

            return {items: []} // this new[] will be replace inside originalState = []
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer