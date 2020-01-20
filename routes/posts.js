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

postsRoute.post('/', restricted, (req, res) => {
    const post = req.body
    if (post.title && post.medium && post.image_url && post.description && post.user_id) {
        db('post').insert(post)
        .then((id) => {
            res.status(201).json({message: "Success"})
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({message: "Internal server error"})
        })
    } else {
        res.status(400).json({message: "Bad request."})
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