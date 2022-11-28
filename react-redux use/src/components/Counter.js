import classes from './Counter.module.css';
import {useSelector,useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';


const Counter = () => {
  // to get the sepecified data managed by redux after updation
  const count = useSelector(state=>{return state.count.count})
  const show = useSelector(state =>{return state.count.showCounter})
  //to re render dispatch should be called ,for redux we get that like this for work like a useReducer
  const dispatch = useDispatch()

  const incrementHandler = () =>{
         //cause-rerender-update data
         //counterAction-it contain method available for the updation
         dispatch(counterActions.increment())
  }
  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
    
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () =>{
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
