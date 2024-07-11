const express = require('express');
const router = express.Router();


//Call the table
const {Posts} = require('../models');

//Making GET All request
router.get('/', async (req,res) =>{
    const lisOfPost = await Posts.findAll(); //Find all the info in the table
    res.json(lisOfPost);
});

//Making a post requets
router.post('/', async (req,res) =>{
    const post = req.body; //Grab the post data for the body
    await Posts.create(post); //Call sequealize for insert the data into the table
    res.json(post); //return a respond
});

module.exports = router;