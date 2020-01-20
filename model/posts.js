const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll,
    findByUserId
}

function findById(id) {
    return db('post').where({id: id});
};

function findAll(id) {
    return db('post');
};

function findByUserId(userId) {
    return db('post').where({user_id: userId});
};