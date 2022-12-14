const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Recipe = require("./models/recipe");
const User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/IMMCCookbook', {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log("Mongo connection open")
})
.catch(err => {
    console.log("oh no Mongo connection error");
    console.log(err)
});

app.listen(3000, () => {
    console.log("App is listening on port 3000")
});