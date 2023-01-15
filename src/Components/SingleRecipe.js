import {React } from 'react';
import { Link } from 'react-router-dom';

export default function SingleRecipe ({recipe, index, setSingleRecipe}) {
    return (
            <div key={index} class="recipeContainer">
                <section>
                    <h3>{recipe.recipeName}</h3>
                    <div class="author">{recipe.author}</div>
                </section>
                <section id="postDescription">
                    <p>{recipe.description}</p>
                    <div>Time:{recipe.duration.time} {recipe.duration.unit}</div>
                </section>
                <Link to={`/recipes/${recipe._id}`}><button onClick={setSingleRecipe(recipe)}>Details</button></Link>
                {/* would like to make the whole box clickable */}
            </div>
    )
}