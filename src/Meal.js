import React from "react";

export default function Meal(props) {
    console.log(props);
return(
    <div className="Meal">
    <h3>{props.meal.strMeal}</h3>
    <p>{props.meal.strInstructions}</p>

</div>
)
}
