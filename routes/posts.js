const express = require('express');

const postsRoute = express.Router();

const db = require('../data/knexConfig');

postsRoute.get('/', (req, res) => {
    db('post')
    .then((data) => {
        const posts = data
        res.status(200).json({posts: posts})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
});

postsRoute.get('/:id', (req, res) => {
    const id = req.params.id
    db('post').where({"id": id})
    .then((post) => {
        console.log(post)
        if(post.length > 0) {
            res.status(200).json({post: post})
        } else {
            res.status(200).json({message: "post not found"})
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

module.exports = postsRoute;