//Create an instance of express and an instance of app 
//Is a standar code for initilizaties APIs
const express = require('express');
const app = express();

//Allows that we can access to the body
app.use(express.json());

//Import the table
const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

//Call the port
db.sequelize.sync().then( () => {
    app.listen(3001, () =>{
        console.log("Server running on port 3001");
    } );
});



//Create our table