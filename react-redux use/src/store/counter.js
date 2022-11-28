import { createSlice } from "@reduxjs/toolkit"

//creating a slice of reducer function for the reduxstor-modularity
//name,initialState,reducers - properties is must
const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0,showCounter:true},
    reducers :{
        increment(state){ state.count++},
        decrement(state){ state.count--},
        increase(state,action){ state.count += action.payload},
        toggle(state){state.showCounter = !state.showCounter}

    }
})


export const counterActions = counterSlice.actions;
export default counterSlice;