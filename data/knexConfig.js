const knex = require('knex');
const knexConfig  = require('../knexfile');

console.log(process.env.DB_ENV, "< ------")
const db = knex(knexConfig[process.env.DB_ENV]);

module.exports = db;