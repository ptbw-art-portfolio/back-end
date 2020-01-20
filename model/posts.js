const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll,
    findByUserId
}

function findById(id) {
    // find by id 
    return db('user').where({id: id});
};

function findAll(id) {
    // find by id 
};

function findByUserId(userId) {
    
};