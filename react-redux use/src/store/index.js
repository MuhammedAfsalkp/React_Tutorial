//first look at the  commented code given below this 
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './auth';
import counterSlice from './counter';



//if there is multiple reducer slice
// const store = configureStore({
//     reducer: {counter:counterSlice.reducer,auth:authSlice.reducer}
// })

const store = configureStore({
    reducer:{count:counterSlice.reducer,auth:authSlice.reducer}
})




export default store;

 //without @reduxjs/toolkit
//This way (down) of using redux is not bad,but when the project become larger 
//the reducer function become large ,type.action become repeated confusing
//so use @reduxjs/toolkit
// import {createStore} from 'redux'

// const countReducer = (state={count:0,showCounter:true},action) =>{
//     if(action.type === 'INCREMENT'){
//         return {count:state.count+1,showCounter:state.showCounter}
//     }
//     if(action.type === 'DECREMENT'){
//         return {count:state.count-1,showCounter:state.showCounter}
//     }
//     if(action.type === 'INCREASE'){
//         return {count:state.count+action.amount,showCounter:state.showCounter}
//     }
//     if(action.type === 'TOGGLE'){
//         return {count:state.count , showCounter:!state.showCounter}
//     }
//     return state;
// }


// const store = createStore(countReducer)

// export default store;