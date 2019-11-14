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

/*
* App 
*/

const app = express();

/*
* Middleware 
*/

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/auth', authRoute)

/*
* Export 
*/
module.exports = app;