const Recipe = require('./models/recipe');
const User = require('./models/user')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IMMCCookbook', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err =>{
        console.log("MONGO CONNECTION ERROR:", err);
        
    })

const seedUsers = [{
    firstName: "Anna",
    lastName: "Gaston",
    email: "a.m.gaston24@gmail.com",
    password: "Annabanana421"
}];

User.insertMany(seedUsers)
.then(res => {
    console.log("Success: ", res)
}).catch(err=>{
    console.log("ERROR inserting users: ", err)
})

const seedRecipes = [{
    recipeName: "Anna's Chili",
    author: "Anna Gaston",
    description: "Hearty vegetarian chili",
    duration: {
        time: 45,
        unit: 'min'
    },
    ingredients:[{
        name: "Kidney Beans", 
        quantity: 2,
        quantityUnit: "cans"
    }, {
        name: 'onion', 
        quantity: 2,
        quantityUnit: ''
    },{
        name: "diced tomatoes", 
        quantity: 1,
        quantityUnit: "cans"
    },{
        name: "tomato sauce", 
        quantity: 1,
        quantityUnit: "can"
    },
    {
        name: "tomato sauce", 
        quantity: 1,
        quantityUnit: "can"
    },
    {
        name: "tomato sauce", 
        quantity: 1,
        quantityUnit: "can"
    }],
    instructions: [String],
    servings: 6,
    cateogory: ['vegetarian', 'stew']
}];

Recipe.insertMany(seedRecipes)
    .then(res=>{
        console.log("Success: ", res)
    }).catch(err=>{
        console.log("ERROR inserting seed data: ", err)
    })

