/*
* Dependencies 
*/

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

/*
* Routes 
*/

const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')

/*
* App 
*/

const app = express();

/*
* Restreicted Middleware
*/

const restricted = require('./helpers/restricted') 

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/users',restricted, usersRoute)
app.use('/posts', restricted, postsRoute)

/*
* Export 
*/
module.exports = app;