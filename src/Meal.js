import React, { useState } from "react";
import './Meal.css';

export default function Meal(props) {
    let [recipeDetails, setRecipeDetails] = useState(null);

    function showRecipeDetails(event){
        event.preventDefault();
        details();
    }

return(
    <div className="Meal">
        <div className="card">
    <h1>{props.meal.strMeal}</h1>
    <img src={props.meal.strMealThumb} alt="meal" onClick={showRecipeDetails}/>
    </div>
</div>
);
}

function details(props){
    return(
        <div className="card">
    <p>{props.meal.strInstructions}</p>
    </div>
    )

}



