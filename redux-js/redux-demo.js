const redux = require('redux')
 
//2.reducer function contain 2 arg with initialized state,acrtion contail data that passed when dispatch call
//state will be initialized with the last return state when the store(1) was  created
const countReducer = (state={count:0},action) =>{
    if(action.type === 'INCREMENT' ){
        return {count:state.count + 1}

    }

    if(action.type === 'NORMAL' ){
        return {count:state.count - 0}

    }
    
    if(action.type === 'DECREMENT' ){
        return {count:state.count - 1}

    }
    
    return state;
}

//1-First create the store assign its reducer function
const store = redux.createStore(countReducer)

//5/subscription funcrion
const counterSubscriber = () =>{
    //6.get the latest stae associated with the store-reduce function returbs
   const latestState = store.getState();
   console.log(latestState)

}

//3.create subscription for the store which will always be triggered or called whenever the dipatch called
store.subscribe(counterSubscriber)


//7.final-trigger an action-so the store's associated reducer function will be called,action get the data passed here
//Regarding the action we update the state by return it
//whenever the reducer function returns the store subscribe function will be triggered - heree we get the latest stae (which is updated)
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'NORMAL'})
store.dispatch({type:'DECREMENT'})