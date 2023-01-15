const express = require('express');
const app = express();
const Recipe =require("./db/models/recipe")

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
app.use(cors());


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IMMCCookbook', {useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=>{
        console.log("Mongo connection open");
    })
    .catch(err => {
        console.log("OH NO Mongo connection error");
        console.log(err);
    });

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

//app.set('src', path.join(__dirname, 'src'));

app.get('/recipes', async (req, res) => {
        const recipes = await Recipe.find({});
        //console.log(recipes)
        res.send(recipes);
});

app.get('/recipes/:recipeId', async(req,res) => {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
   //console.log(recipe);
   res.send(recipe)
})

app.get('/health', (req, res, next) => {
    res.send({
      healthy: true,
    });
  });

app.listen(4000, ()=> {
    console.log("Serving on Port 4000");
});