//Create an instance of express and an instance of app 
//Is a standar code for initilizaties APIs
const express = require('express');
const app = express();
const cors = require('cors');

//Allows that we can access to the body
app.use(express.json());
app.use(cors());


//Import the table
const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

//Comments router
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);

//Call the port
db.sequelize.sync().then( () => {
    app.listen(3001, () =>{
        console.log("Server running on port 3001");
    } );
});


