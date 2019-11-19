const jwt = require("jsonwebtoken")
const secret = process.env.SECRET || "let's keep this a secret";

function restricted(req, res, next) {
    if(req.headers.authorization) {
        const token = req.headers.authorization;
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({message: "Missing token."})
    }
}

module.exports = restricted