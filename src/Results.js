import React from "react";

export default function Results(props) {
    if (props.results) {
        return (
         <div className="Results">
            <h2>{props.results.strMeal}</h2>
            <h3>{props.results.strInstructions}</h3>
        
        </div>
        );
    } else {
        return null;
    }
}