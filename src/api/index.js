


export const fetchRecipes = async () => {
    try {
      const response = await fetch(`http://localhost:4000/recipes`,{
        headers: {
            'Content-Type': 'application/json'
        }
        })
      const result = await response.json()
      
      //console.log("result:", result);
      return result
      
  } catch (error) {
      console.log(error)
  }
}

export const fetchSingleRecipe = async () => {
  try {
    const response = await fetch(`http://localhost:4000/recipes/:recipeId`,{
      headers: {
          'Content-Type': 'application/json'
      }
      })
    const result = await response.json()
    
    //console.log("result:", result);
    return result
    
} catch (error) {
    console.log(error)
}
}