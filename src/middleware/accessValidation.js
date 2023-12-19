require('dotenv').config()

const jwt = require('jsonwebtoken')

const accessValidation = (req, res, next) => {
    // Get token from authorization header
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

    if (!token) {
        return res.status(401).json({
            message: 'Token not provided'
        })
    }

    // Verify JWT token with SECRETKEY `.env`
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid token'
            })
        }

        req.decodedToken = decoded
        req.idUser = decoded.idUser
    })
    next()
}

module.exports = accessValidation