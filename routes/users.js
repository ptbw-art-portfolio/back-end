const express = require('express');
const usersRoute = express.Router();
const Users = require('../model/users');
const Posts = require('../model/posts');

usersRoute.get('/', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
});

usersRoute.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: "Internal server error"});
    }
});

usersRoute.get('/:id/posts', async (req, res) => {
    try {
        const id = req.params.id
        const posts = await Posts.findByUserId(id);        
        res.status(200).json(posts)
    } catch (err) {
        console.err(err);
        res.status(500).json({message: "Internal server error"})
    }
})

module.exports = usersRoute;