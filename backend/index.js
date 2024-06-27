//Create an instance of express and an instance of app 
//Is a standar code for initilizaties APIs
const express = require('express');
const app = express();

//Call the port
app.listen(3001, () =>{
    console.log("Server running on port 3001");
} );

//Create our table