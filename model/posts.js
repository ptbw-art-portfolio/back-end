const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll,
    findByUserId
}

function findById(id) {
    return db('user').where({id: id});
};

function findAll(id) {
    return db('users');
};

function findByUserId(userId) {
    return db('posts').where({user_id: userId});
};