const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const authRoute = require('./routes/auth')

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/auth', authRoute)

module.exports = app;