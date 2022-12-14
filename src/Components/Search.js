import React from 'react';
import './search.css'

export default function Search(props) {
    return(
        <>
            <form id="searchForm">
                <fieldset id="searchContainer">
                    <label id="searchLabel">Find a recipe:</label> 
                    <input></input>
                </fieldset>
                <fieldset id="categoryContainer">
                    <label id="categoryLabel">Category</label>
                    <select>
                        <option value="any">Any</option>
                    </select>
                </fieldset>
                <button>Search</button>
            </form>
        </>
    )
}