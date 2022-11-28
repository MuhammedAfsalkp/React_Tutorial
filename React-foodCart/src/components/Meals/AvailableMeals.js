import React,{useState,useEffect} from 'react'

import classes from './AvailableMeals.module.css'

import Card from '../UI/Card';

import MealItem from './MealItem/MealItem';




  const AvailableMeals = ( ) =>{
    const [meals,setMeals] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    useEffect(()=>{
      const fetchData =async () => {
        const response = await fetch('https://react-meal-cart-default-rtdb.firebaseio.com/meals.json')
        const data = await response.json();
        if(!response.ok){
          throw new Error('Something went wrong.');
        }
        let loadedMeals=[];
        for(const key in data){
          loadedMeals.push({id:key,name:data[key].name,price:data[key].price,description:data[key].description});
        }
         setLoading(false);
        setMeals(loadedMeals);
      
      }
      fetchData().catch(err=>{
        setError(err.message)
      })

    },[setMeals])
    if(error){
      return(<section className={classes['meals-error']}>
        <h3>{error}</h3>
        </section>);

    }

    if(isLoading){
      return(<section className={classes['meals-loading']}>
        <p>Loading....</p>
      </section>)
    }
      const mealsContent = meals.map(meal =>
      <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}>
      </MealItem>)
      return(<section className={classes.meals}>
          <Card>
          <ul>
            {mealsContent}
         </ul>
      </Card>
      </section>);
  }


  export default AvailableMeals;


