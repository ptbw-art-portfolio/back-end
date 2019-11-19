const express = require('express');

const postsRoute = express.Router();

const db = require('../data/knexConfig');

postsRoute.get('/', (req, res) => {
    db('post')
    .then((posts) => {
        res.status(200).json(posts)
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
            res.status(200).json(post)
        } else {
            res.status(404).json({message: "post not found"})
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

postsRoute.delete('/:id', (req, res) => {
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