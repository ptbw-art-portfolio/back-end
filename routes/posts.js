const express = require('express');

const postsRoute = express.Router();

const db = require('../data/knexConfig');

postsRoute.get('/', (req, res) => {
    db('post')
    .then((data) => {
        const posts = data
        res.status(200).json({data: posts})
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
        if(post.length > 0) {
            res.status(200).json({data: post})
        } else {
            res.status(200).json({message: "post not found"})
        }
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

postsRoute.post('/', (req, res) => {
    const post = req.body
    db('post').insert(post)
    .then((id) => {
        res.status(201).json({message: "Success"})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

postsRoute.post('/', (req, res) => {
    const post = req.body
    db('post').insert(post)
    .then((id) => {
        res.status(201).json({post_id: id, message: "Success"})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})
module.exports = postsRoute;