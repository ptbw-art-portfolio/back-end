const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll
};

function findById(id) {
    return db('user').where({id: id})
};

function findAll() {
    return db('user');
};
