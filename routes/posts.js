const express = require('express');
const postsRoute = express.Router();
const restricted = require('../helpers/restricted');
const Posts = require('../model/posts');
const { validatePosts } = require('../helpers/dataValidation');

postsRoute.get('/', async (req, res) => {
    try {
        const posts = await Posts.findAll();
        res.status(200).json(posts)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    }
});

postsRoute.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const post = await Posts.findById(id);
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
});

postsRoute.post('/', validatePosts, async (req, res) => {
    try {
        const post = req.body
        const id = await Posts.insert(post);
        res.status(200).json({id: id});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

// RESTRICTED
postsRoute.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const post = await Posts.update(id, body);
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

// RESTRICTED
postsRoute.delete('/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        res.status(202).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})
module.exports = postsRoute;