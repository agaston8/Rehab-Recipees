import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './posts.css'
import { fetchRecipes } from '../api';
import SingleRecipe from './SingleRecipe';

export default function Posts ({recipes, setRecipes, setSingleRecipe}) {

    const fetchAllRecipes = async () => {
        try {
            const response = await fetchRecipes();
            //console.log('response',response);
            setRecipes(response);
        } catch (error) {
           console.error("Error fetching all candles") 
        }
    }
    //console.log(recipes)
    useEffect(() => {
        fetchAllRecipes()
     }, [])

    return (
        <div id="recipeList">
            {
            recipes.map((recipe, index) => {
                return <SingleRecipe recipe={recipe} index={index} setSingleRecipe={setSingleRecipe} />
            })
          }
    </div>
    )
};

