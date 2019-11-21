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

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/posts', postsRoute)

/*
* Export 
*/
module.exports = app;