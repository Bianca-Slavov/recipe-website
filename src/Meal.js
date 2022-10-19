import React from "react";
import './Meal.css';

export default function Meal(props) {
    console.log(props);
return(
    <div className="Meal">
        <div className="card">
    <h5>{props.meal.strMeal}</h5>
    <img src={props.meal.strMealThumb} alt="meal"/>
    </div>
</div>
)
}
