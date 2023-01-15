import { React } from 'react';

export default function singleRecipeView ({singleRecipe : recipe}) {
    console.log(recipe)
    return(
        <>
            <div>
                {/* add imaging */}
            </div>
            <div>
                <h2>{recipe.recipeName}</h2>
                <div>
                    <span>time: {recipe.duration.time} {recipe.duration.unit} </span>
                    <span>Servings: {recipe.servings}</span>
                </div>
            </div>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {
                        recipe.ingredients.map((ingredient, index) => {
                            return(
                                <li key={index}>{ingredient.quantity} {ingredient.quantityUnit} {ingredient.name} </li>
                            )
                        })

                    }
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ol>
                    {
                        recipe.instructions.map((step, index) => {
                            return(
                                <li key={index}> {step} </li>
                            )
                        })
                    }
                </ol>
            </div>
            
        </>
    )
}

