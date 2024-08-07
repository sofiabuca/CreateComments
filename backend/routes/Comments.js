const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

//Get the post id
router.get('/:postId', async (req, res) =>{
    const postId = req.params.postId;
    const comments = await Comments.findAll({where: { PostId: postId }});
    res.json(comments);
});

//Create the comment
router.post("/", async (req, res) =>{
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});

//Create a comment
router.post("/", async (req,res) =>{
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});

module.exports = router;


