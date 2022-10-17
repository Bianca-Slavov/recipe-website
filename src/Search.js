import React, { useState } from 'react';
import axios from "axios";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function searchRecipe(event) {
        event.preventDefault();

        // documentation: https://www.themealdb.com/api.php
        let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={searchRecipe}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}