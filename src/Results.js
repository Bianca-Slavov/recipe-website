import React from "react";
import Meal from "./Meal"

export default function Results(props) {
    if (props.results) {
        return (
         <div className="Results">
            {props.results.map(function (meal, index) {
                if (index < 6) {
                return (
                    <div key={index}>
                        <Meal meal={meal} />
                    </div>
                );
                } else {
                    return null;
                }
            })}
        </div>
        );
    } else {
        return ;
    }
}