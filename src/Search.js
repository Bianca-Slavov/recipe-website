import React, { useState } from 'react';

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function searchRecipe(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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