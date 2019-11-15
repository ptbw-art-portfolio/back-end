const express = require('express');

const usersRoute = express.Router();

const db = require('../data/knexConfig');

usersRoute.get('/', (req, res) => {
    db('user')
    .then((users) => {
        res.status(200).json({users: users})
    })
    .catch((err) => {
        console.error(err)
        res.status(500).json({message: "Internal server error"})
    })
});

module.exports = usersRoute;