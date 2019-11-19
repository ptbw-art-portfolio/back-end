const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || "let's keep this a secret";

function generateToken( user ) {
    const payload = {
        username: user.username,
        userId: user.id
    }
    const options = {
        expiresIn: '2hr'
    }
    return jwt.sign(payload, secret, options);
}

module.exports = generateToken;