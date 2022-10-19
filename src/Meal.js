import React from "react";
import './Meal.css';

export default function Meal(props) {
    console.log(props);
return(
    <div className="Meal">
        <div className="card">
    <h1>{props.meal.strMeal}</h1>
    <img src={props.meal.strMealThumb} alt="meal" />
    </div>
</div>
)
}
