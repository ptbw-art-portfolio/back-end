const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll,
    findByUserId,
    insert
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

function insert(post) {
    return db('post').insert(post);
};