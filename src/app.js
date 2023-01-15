import {React, useState, useEffect} from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Recipes from './Components/AllRecipees';
import Login from './Components/Login';
import SingleRecipeView from './Components/SingleRecipeView'
import Registration from './Components/Registration';
import { fetchRecipes } from './api';


export default function App() {

  const [recipes, setRecipes] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState([]);

  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/recipes" element={<Recipes recipes={recipes} setRecipes={setRecipes} setSingleRecipe={setSingleRecipe}/>}/>
          <Route path="/recipes/:recipeId" element={<SingleRecipeView singleRecipe={singleRecipe} />}/>
        </Routes>

      </Router>
    </>
  )
};


