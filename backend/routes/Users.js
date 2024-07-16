const express = require('express');
const router = express.Router();


//Call the table
const {User} = require('../models');

//Making GET All request
router.get('/', async (req,res) =>{
    const lisOfPost = await Posts.findAll(); //Find all the info in the table
    res.json(lisOfPost);
});

//Create a post 
router.post('/', async (req,res) =>{
    const post = req.body; //Grab the post data for the body
    await Posts.create(post); //Call sequealize for insert the data into the table
    res.json(post); //return a respond
});

//Call the post using ID
router.get('/byId/:id', async (req, res) =>{
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
});

module.exports = router;