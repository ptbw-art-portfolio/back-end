const db = require('../data/knexConfig');

module.exports = {
    deleteById,
    findById,
    findAll,
    findByUserId,
    insert,
    update
}

function findById(id) {
    return db('post').where({id: id});
};

function findAll() {
    return db('post');
};

function findByUserId(userId) {
    return db('post').where({user_id: userId});
};

function insert(post) {
    return db('post').insert(post);
};

function update(post_id, post) {
    return db('post').where({id: post_id}).update(post);
};

function deleteById(id) {
    console.log("id inside model", id)
    return db('post').where({"id": id}).del();
};