const express = require('express');

const usersRoute = express.Router();

const db = require('../data/knexConfig');

usersRoute.get('/', (req, res) => {
    db('user')
    .then((data) => {
        const users = data.map((user) => {
            delete user.password 
            return user
        })
        res.status(200).json(users)
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
});

usersRoute.get('/:id', (req, res) => {
    const id = req.params.id
    db('user').where({"id": id})
    .then((user) => {
        delete user.password
        res.status(200).json(user)
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

usersRoute.get('/:id/posts', (req, res) => {
    const id = req.params.id
    db('post').where({"user_id": id})
    .then((posts) => {
        res.status(200).json(posts)
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

module.exports = usersRoute;