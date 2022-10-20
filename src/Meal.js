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
               <div className="container">
               <h2>{props.meal.strMeal}</h2>
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
               <p>{props.meal.strMeasure11}  {props.meal.strIngredient12}</p>
               <p>{props.meal.strMeasure12} {props.meal.strIngredient12}</p>
               <p>{props.meal.strMeasure13} {props.meal.strIngredient13}</p>
               <p>{props.meal.strMeasure14} {props.meal.strIngredient14}</p>
               <p>{props.meal.strMeasure15} {props.meal.strIngredient15}</p>
               <p>{props.meal.strMeasure16} {props.meal.strIngredient16}</p>
               <p>{props.meal.strMeasure17} {props.meal.strIngredient17}</p>
               <p>{props.meal.strMeasure18} {props.meal.strIngredient18}</p>
               <p>{props.meal.strMeasure19} {props.meal.strIngredient19}</p>
               <p>{props.meal.strMeasure20} {props.meal.strIngredient20}</p>
               <h3>Preparation</h3>
               <p>{props.meal.strInstructions}</p>
               <a href={props.meal.strYoutube} target="_blank" alt="">Watch Instruction video</a>
               <h3>Enjoy your meal!</h3>
            
               <hr />
            </div>
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
