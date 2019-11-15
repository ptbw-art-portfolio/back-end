const express = require('express');

const postsRoute = express.Router();

const db = require('../data/knexConfig');

postsRoute.get('/', (req, res) => {
    db('user')
    .then((data) => {
        const users = data.map((user) => {
            delete user.password 
            return user
        })
        res.status(200).json({users: users})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
});

postsRoute.get('/:id', (req, res) => {
    const id = req.params.id
    db('user').where({"id": id})
    .then((user) => {
        delete user.password
        res.status(200).json({user: user})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
})

module.exports = postsRoute;