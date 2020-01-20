const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll
};

function findById(id) {
    return db('user').where({id: id})
};

function findAll() {
    db('user')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
};
