const express = require('express');
const bcryptjs = require('bcryptjs');
const generateToken = require('../helpers/generateToken');
const authRoute = express.Router();

const db = require('../data/knexConfig');

authRoute.post('/signup', async (req, res) => {
    const user = req.body;
    if (user.fullName && user.email && user.username && user.password ) {
        try {
            const hash = bcryptjs.hashSync(user.password, 14);
            user.password = hash;
            const id = await db('user').returning('id').insert(user);
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
    const credentials = req.body;
    if ( credentials.email && credentials.password ) {
        db('user').where({"email": credentials.email}).first()
        .then(user => {
                if ( user === undefined ) {
                    res.status(400).json({message:"User was not found"});
                } 
                
                if (bcryptjs.compareSync(credentials.password, user.password)) {
                    const token = generateToken(req.body);
                    delete user.password;
                    res.status(200).json({ token, user});
                } else {
                    res.status(400).json({message:"invalid credentials"});
            }
        })
        .catch(err => res.status(500));
    } else {
        res.status(400).json({message:'Something went wrong! Try again.'});
    }
});


module.exports = authRoute;