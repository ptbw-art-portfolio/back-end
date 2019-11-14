const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || "let's keep this a secret";

function generateToken( user ) {
    const payload = {
        username: user.username,
        userId: user.id
    }
    const options = {
        expiresIn: '2hr'
    }
    return jwt.sign(payload, secret, options);
}

const authRoute = express.Router();

const db = require('../data/knexConfig');

authRoute.post('/signup', async (req, res) => {
    const user = req.body;
    if (user.fullName && user.email && user.username && user.password ) {
        try {
            const hash = bcryptjs.hashSync(user.password, 14);
            user.password = hash;
            const [ id ] = await db('user').insert(user);
            res.status(200).json({id})
        } catch (err) {
            console.log(err)
            res.status(500).json({err})
        }
    } else {
        res.status(400).json({message: "missing requred fields"})
    }
});

authRoute.post('/login', (req, res) => {
    const { username, password } = req.body;
    if ( username && password ) {
        db('user').where({username}).first()
        .then(data => {
            const user = data;
                if ( user === undefined ) {
                    res.status(400).json({message:"User was not found"});
                } else if ( bcryptjs.compareSync(password, user.password) || (password == user.password)) {
                    const token = generateToken(req.body);
                    delete user.password;
                    res.status(200).json({ token, user});
                } else {
                    console.log('if')
                res.status(400).json({message:"invalid credentials"});
            }
        })
        .catch(err => res.status(500));
    } else {
        res.status(400).json({message:'Something went wrong! Try again.'});
    }
});


module.exports = authRoute;