import React, { useState } from 'react';
import './Meal.css';

export default function Meal(props) {
    const [showDiv, setShowDiv] = useState(false);

    function showRecipeDetails(event){
        event.preventDefault();
        setShowDiv(true)
    }
return(
    
     <div className="Meal">
         {showDiv && (
           <div className="recipeDetails">
               <h1>{props.meal.strMeal}</h1>
               <p>{props.meal.strMeasure1}  {props.meal.strIngredient1}</p>
               <p>{props.meal.strMeasure2} {props.meal.strIngredient2}</p>
               <p>{props.meal.strMeasure3} {props.meal.strIngredient3}</p>
               <p>{props.meal.strMeasure4} {props.meal.strIngredient4}</p>
               <p>{props.meal.strMeasure5} {props.meal.strIngredient5}</p>
               <p>{props.meal.strMeasure6} {props.meal.strIngredient6}</p>
               <p>{props.meal.strMeasure7} {props.meal.strIngredient7}</p>
               <p>{props.meal.strMeasure8} {props.meal.strIngredient8}</p>
               <p>{props.meal.strMeasure9} {props.meal.strIngredient9}</p>
               <p>{props.meal.strMeasure10} {props.meal.strIngredient10}</p>
               <h2>Preparation</h2>
               <p>{props.meal.strInstructions}</p>
            
               </div>
       ) }
         <div className="card">
             <h1>{props.meal.strMeal}</h1>
             <img src={props.meal.strMealThumb} alt="meal" />
             <button onClick={showRecipeDetails}>Cook this recipe!</button>
             
        </div>
    </div>
);
}
