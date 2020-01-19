const db = require('../data/knexConfig');

module.exports = {
    findById,
    findAll
};

function findById(id) {
    db('users')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err)
    })
};

function findAll() {
    db('users')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
};
