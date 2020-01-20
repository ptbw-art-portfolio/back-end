const express = require('express');
const postsRoute = express.Router();
const db = require('../data/knexConfig');
const restricted = require('../helpers/restricted');
const Users = require('../model/users');
const Posts = require('../model/posts')

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

// RESTRICTED 
postsRoute.post('/', async (req, res) => {
    try {
        const post = req.body
        const id = await Posts.insert(post);
        res.status(200).json({id: id});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

postsRoute.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db('post').where({"id": id}).update(body)
    .then((id) => {
        res.status(202).json({message: "Update successful!"})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

postsRoute.delete('/:id', restricted, (req, res) => {
    const id = req.params.id
    db('post').where({"id": id}).del()
    .then((id) => {
        res.status(202).end()
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})
module.exports = postsRoute;