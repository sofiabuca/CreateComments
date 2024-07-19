const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require("bcrypt");

//Create a post request for registration
router.post('/', async (req,res) =>{
   const {userName, password} = req.body; //We are sending an object that has both of them
   bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            userName: userName,
            password: hash,
        })
        res.json("Success");
   }); //passing the original password and convert it
});

//Login route
router.post('/login', async (req,res) =>{
    const {userName, password} = req.body;

    //Check if the username exist in the table
    const user = await Users.findOne({where: {userName: userName}});
    
    if(!user) res.json({error: "User doesn't EXIST"});

    //compare the passwords
    bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json({error: "Wrong username and password combination"});
        res.json("You logged in");
    });
});


module.exports = router;