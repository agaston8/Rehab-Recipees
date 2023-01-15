const Recipe = require('./db/models/recipe');
const User = require('./db/models/user')
//const {Recipe, User} = require('./db/models/index')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IMMCCookbook', {useNewUrlParser: true, useUnifiedTopology:true});


const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedUsers = [{
        firstName: "Anna",
        lastName: "Gaston",
        email: "a.m.gaston24@gmail.com",
        password: "Annabanana421"
    },{
        firstName: "Mark",
        lastName: "Haddon",
        email: "mark.haddon@gmail.com",
        password: "Skier50210"
    },{
        firstName: "Lisa",
        lastName: "Schlaefer",
        email: "lsoccermom9@gmail.com",
        password: "DoorCounty2022"
    },{
        firstName: "Alex",
        lastName: "Martin",
        email: "a.martini45@gmail.com",
        password: "OTHands93"
    },{
        firstName: "William",
        lastName: "Flasch",
        email: "williamf@gmail.com",
        password: "GoldenEagles5"
    },{
        firstName: "Tim",
        lastName: "Hubner",
        email: "Thubs52@gmail.com",
        password: "Timiscool1996"
    }];



const seedRecipes = [{
    recipeName: "Vegetarian Chili",
    author: "Anna Gaston",
    description: "Hearty and filling vegetarian chili",
    duration: {
        time: 1,
        unit: 'hr'
    },
    ingredients:[{
        name: "olive oil", 
        quantity: 2,
        quantityUnit: "tbsp"
    }, {
        name: "red onion", 
        quantity: 1,
        quantityUnit: ""
    },{
        name: "bell pepper", 
        quantity: 1,
        quantityUnit: ""
    }, {
        name: "garlic", 
        quantity: 4,
        quantityUnit: "cloves"
    }, {
        name: "Kidney Beans", 
        quantity: 2,
        quantityUnit: "can(s)"
    }, {
        name: 'pinto beans', 
        quantity: 1,
        quantityUnit: 'can'
    },{
        name: "diced tomatoes", 
        quantity: 2,
        quantityUnit: "can(s)"
    },{
        name: "black beans", 
        quantity: 2,
        quantityUnit: "can(s)"
    },
    {
        name: "vegetable broth", 
        quantity: 1,
        quantityUnit: "cup(s)"
    },
    {
        name: "oregano", 
        quantity: 1,
        quantityUnit: "tsp"
    }, {
        name: "chili powder", 
        quantity: 2,
        quantityUnit: "tbsp"
    }, {
        name: "cumin", 
        quantity: 2,
        quantityUnit: "tsp"
    }, {
        name: "paprika", 
        quantity: 2,
        quantityUnit: "tsp"
    }, {
        name: "salt", 
        quantity: 1,
        quantityUnit: "tsp"
    }, {
        name: "elbow noodles", 
        quantity: 16,
        quantityUnit: "oz"
    }],
        instructions: ['In a medium pot, boil 2 qts water. Once boiling add pasta and cook until al dente. Drain the water and set aside once finished.',
            'In a large pan over medium heat, warm the olive oil until shimmering. Add the chopped onion, and bell pepper. Stir to combine and cook, stirring occasionally, until the vegetables are tender, about 5-7 minutes', 
            'Add the salt, garlic, chili powder, cumin, smoked paprika and oregano. Cook until fragrant while stirring constantly, about 1 minute]',
            'Add the diced tomatoes and their juices, the drained black beans and pinto beans, vegetable broth, and tomato sauce. Stir to combine and let the mixture come to a simmer. Continue cooking, stirring occasionally and reducing heat as necessary to maintain a gentle simmer, for 30 minutes',
            'Remove chili from heat, add in the pasta noodles, stirring until fully combined',
            'Divide the mixture into individual bowls and serve with garnishes of your choice'],
        servings: 6,
        cateogory: ['vegetarian', 'Soup/Stew', "Entrée"]
    },
    {
        recipeName: "Baked Brie",
        author: "Lisa Schlaefer",
        description: "A crowd favorite for a unique and tasty appetizer. Perfect for the holidays!",
        duration: {
            time: 30,
            unit: 'min'
        },
        ingredients:[{
            name: "Brie cheese wheel",
            quantity: 1,
            quantityUnit: ""
        }, {
            name: "Cream cheese",
            quantity: 1,
            quantityUnit: "package"
        },{
            name: "Pie crust",
            quantity: 1,
            quantityUnit: ""
        },{
            name: "Rasberry Jam",
            quantity: 1,
            quantityUnit: "jar"
        },{
            name: "Egg",
            quantity: 1,
            quantityUnit: ""
        },{
            name: "Water cracker",
            quantity: 2,
            quantityUnit: "box(s)"
        },
        ],
        instructions: ['Preheat your oven to 350 degrees.',
            'Cover the brie cheese wheel in cream cheese spreading evenly.',
            'Place the brie wheel in the middle of the pie crust.',
            'Add jam to your taste/preference to the top to the brie wheel covering the top evenly.',
            'Wrap/fold the pie crust over the brie so it is completely covered. Use a fork to pierce the top of the pie crust about 5 times.',
            'Use a brush to cover the crust in an egg white wash.',
            'Place the brie on a baking pan and bake in oven for ~25 minutes.',
            'Optionally broil the brie for 2-3 minutes on high for a browner crust.',
            'Serve warm with crackers and other garnishes of your choice.'
        ],
        servings: 8,
        cateogory: ['Appetizer']
    },{
        recipeName: 'Bacon Wrapped Dates',
        author: "Tim Hubner",
        description: "A simple 3-ingredient appetizer that will blow you away! Enjoy with a crowd of friends! ",
        duration: {
            time: 30,
            unit: 'min'
        },
        ingredients:[{
            name: 'Bacon',
            quantity: 15,
            quantityUnit: 'slices'
        },
        {
            name: "Dates",
            quantity: 30,
            quantityUnit: ""
        },{
            name: "Goat cheese", 
            quantity: 8,
            quantityUnit: "ounces"
        },{
            name: "toothpicks", 
            quantity: 30,
            quantityUnit: ""
        }],
        instructions: ['Preheat the oven to 350 degrees Fahrenheit. Slice the dates lengthwise on one side to create an opening. Remove the pit.',
            'Using a spoon, stuff a small amount of goat cheese into the cavity of each date and press the sides together to close.',
            'Cut the bacon slices in half. Wrap each date with a slice of bacon and secure with a toothpick.',
            'Arrange evenly on a baking sheet with raised edges (to catch the grease) and bake for 10 minutes. Remove the dates and use the toothpick to turn each one so it’s laying on its side. Bake for another 5-8 minutes, until browned to your liking, and turn the dates to the other side and repeat.',
            'Remove from the oven, place on a paper towel lined plate, and let stand for 5 minutes before serving.'],
        servings: 16,
        cateogory: ['Appetizer']
        },{
        recipeName: 'Sweet Potato Gnocchi with Brown Butter and Sage',
        author: 'Alex Martin',
        description: 'These are as light as a cloud. Once cooked, they are lightly crisped in a simple brown butter sauce with sage for a tantalizingly delicious and cozy fall meal. ',
        duration: {
            time: 45,
            unit: 'min'
        },
        ingredients:[{
            name: 'Sweet potatoes',
            quantity: 2,
            quantityUnit: ''
        },
        {
            name: "Whole milk ricotta cheese", 
            quantity: 1,
            quantityUnit: 'cup'
        },
        {
            name: 'flour', 
            quantity:2,
            quantityUnit: 'cup(s)'
        },
        {
            name: 'Unsalted butter', 
            quantity: 4,
            quantityUnit: 'tbsp'
        },
        {
            name: "Fresh Sage", 
            quantity: 16,
            quantityUnit: "leaves"
        },
        {
            name: "baby Spinach", 
            quantity: 3,
            quantityUnit: 'cup(s)'
        },
        {
            name: 'Parmigiano-Reggiano cheese, finely grated ', 
            quantity: 3,
            quantityUnit: "ounces"
        },
        {
            name: "Salt", 
            quantity: 1,
            quantityUnit: "tsp"
        },
        {
            name: "Black pepper, ground", 
            quantity: 1,
            quantityUnit: "tsp"
        }],
        instructions: ['Pierce the sweet potatoes all over with a fork, wrap in a damp paper towel, and microwave on high until it is very soft, 10 to 13 minutes. Cut in half lengthwise and set aside to slightly cool.',
            'When the sweet potatoes are cool enough to handle, peel and scoop out the flesh into a medium bowl. Mash the flesh with a potato ricer or fork until smooth and no visible lumps are left. Using a fork, stir in the ricotta, salt, and pepper and whisk to combine into a smooth mixture.', 
            'Slowly add the flour into the mixture, about 1/2 cup at a time. Using your hands, combine the flour with the sweet potatoes. Continue adding the flour, kneading the dough very gently after each addition, until combined. Be careful not to over-mix the gnocchi dough, it should remain slightly shaggy and loose but not too sticky.',
            'Once the dough is fairly smooth and easy to handle, transfer it to a floured surface and without kneading it too much, shape into a log that resembles a small bread loaf. Add a few more sprinkles of flour if it seems to sticky, but remember that the less flour you use, the more tender the gnocchi will be.',
            'Shape the gnocchi: Cut 2” thick slices from the log and roll each slice into a long rope that is about 10-12-inches long. Using a knife, cut the rope crosswise into 1” pieces. Transfer the gnocchi to the prepared pan and keep them in an even layer. Repeat with all the remaing dough.',
            "Cook the gnocchi: Once all the the gnocchi is shaped, add a few handfuls to the pot of gently boiling water. Very gently stir after 1 minute to make sure they aren't sticking to the bottom of the pot. Cook until they float to the surface, about 3-4 minutes. Once they float to the surface, wait 30 seconds then scoop them out. Tip: Transfer the cooked gnocchi to a large bowl and toss with a little oil so they don't stick while you cook the rest.",
            'Prepare the Brown Butter Sage Sauce: Place a large skillet over medium-high heat and add the butter. When the foam subsides, lower the heat to medium-low, add the sage leaves and cook until the sage is crispy and the butter is browned, about 3 minutes.',
            'To finish and serve: Add the cooked gnocchi in batches to the skillet. Toss to coat in the butter and cook until browned and crispy on the outside. Once all the gnocchi is done, add the spinach, season with salt and freshly cracked black pepper to taste. Cook for 2 minutes until spinach is wilted. Divide among bowls and top with Parmesan cheese.'
        ],
        servings: 4,
        cateogory: ["Entrée", "Pasta"]
    },{
        recipeName:"Peanut Butter Balls",
        author: "Mark Haddon",
        description: 'A perfect candy for the holidays, an after school snack, a party, or any time you just need a sweet chocolate-peanut butter treat.',
        duration: {
            time: 45,
            unit: 'min'
        },
        ingredients:[{
            name: "Creamy Peanut Butter", 
            quantity: 1,
            quantityUnit: "cup"
        },
        {
            name: "Butter", 
            quantity: 4,
            quantityUnit: "tbsp"
        },
        {
            name: "Powdered Sugar", 
            quantity: 1,
            quantityUnit: 'cup'
        },
        {
            name: "Rice Krispies", 
            quantity: 2,
            quantityUnit: 'cups'
        },
        {
            name: "Semi-sweet chocolate chips", 
            quantity: 2,
            quantityUnit: 'cups'
        }],
        instructions: ['Line a baking sheet with parchment paper or waxed paper.',
            'In a large mixing bowl, cream together the peanut butter, butter, and powdered sugar. Stir in the Rice Krispies until well combined.', 
            'Shape the mixture into small bite-sized balls, place on the prepared cookie sheet, and chill in the refrigerator for at least 30 minutes.',
            'Pour the chocolate chips into a medium microwave-safe bowl. Heat for 1 minute and stir, then continue heating in 20 second intervals, stirring well after each interval until chocolate is melted. Stir until completely smooth.',
            'Dip the chilled peanut butter balls into the melted chocolate and place back on the cookie sheet. Chill again until the chocolate is firm.',
        ],
        servings: 12,
        cateogory: ["Dessert"]
    },{
        recipeName:"Chocolate Chip Cookies",
        author: "Mark Haddon",
        description: 'This is the best chocolate chip cookie recipe ever.',
        duration: {
            time: 30,
            unit: 'min'
        },
        ingredients:[{
            name: "Salted butter", 
            quantity: 1,
            quantityUnit: 'cup'
        },
        {
            name: "White granulated sugar", 
            quantity: 1,
            quantityUnit: 'cup'
        },


        {
            name: "Light brown sugar, packed", 
            quantity: 1,
            quantityUnit: 'cup'
        },
        {
            name: "Vanilla Extract", 
            quantity: 2,
            quantityUnit: "tsp"
        },
        {
            name: "Eggs, large", 
            quantity: 2,
            quantityUnit: ''
        }, {
            name: "All Purpose Flour", 
            quantity: 3,
            quantityUnit: 'cups'
        }, {
            name: "Baking Soda", 
            quantity: 1,
            quantityUnit: 'tsp'
        }, {
            name: "Baking Powder", 
            quantity: .5,
            quantityUnit: 'tsp'
        }, {
            name: "Sea Salt", 
            quantity: 1,
            quantityUnit: 'tsp'
        }, {
            name: "Chocolate chips or chunks",
            quantity: 2,
            quantityUnit: 'cups'
        }],
        instructions: ['Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.',
            'In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.', 
            'Cream together butter and sugars until combined.',
            'Beat in eggs and vanilla until fluffy.',
            'Mix in the dry ingredients until combined.',
            'Add 12 oz package of chocolate chips and mix well.',
            'Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets.',
            'Bake for approximately 8-10 minutes. Take them out when they are just barely starting to turn brown.',
            'Let them sit on the baking pan for 2 minutes before removing to cooling rack.'
        ],
        servings: 36,
        cateogory: ['Dessert']
     },
    //{
    //     recipeName:{
    //         type:String,
    //         required:true
    //     },
    //     author: String,
    //     description: String,
    //     duration: {
    //         time: Number,
    //         unit: {
    //             type: String,
    //             enum:['min', 'hr']
    //         }
    //     },
    //     ingredients:[{
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     }],
    //     instructions: ['',
    //         '', 
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',],
    //     servings: Number,
    //     cateogory: [String]
    // },{
    //     recipeName:{
    //         type:String,
    //         required:true
    //     },
    //     author: String,
    //     description: String,
    //     duration: {
    //         time: Number,
    //         unit: {
    //             type: String,
    //             enum:['min', 'hr']
    //         }
    //     },
    //     ingredients:[{
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     }],
    //     instructions: ['',
    //         '', 
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',],
    //     servings: Number,
    //     cateogory: [String]
    // },{
    //     recipeName:{
    //         type:String,
    //         required:true
    //     },
    //     author: String,
    //     description: String,
    //     duration: {
    //         time: Number,
    //         unit: {
    //             type: String,
    //             enum:['min', 'hr']
    //         }
    //     },
    //     ingredients:[{
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     },
    //     {
    //         name: String, 
    //         quantity: Number,
    //         quantityUnit: String
    //     }],
    //     instructions: ['',
    //         '', 
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',],
    //     servings: Number,
    //     cateogory: [String]
    // },
    ];

const seedDB = async () => {
    await Recipe.deleteMany({});
    await User.deleteMany({});
  
    for(let i=0; i<seedUsers.length; i++) {
        const user= new User(seedUsers[i]);
        await user.save();
    }
    for(let i=0; i<seedRecipes.length; i++) {
        const recipe = new Recipe(seedRecipes[i]);
        await recipe.save();
    };
    console.log("Data should be seeded")
}
//how can i seed user into recipe?

seedDB().then(()=>{
        mongoose.connection.close();
        console.log("Database disconnected.")
    });

