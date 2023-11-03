require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createToken = (username, id) => {
    return jwt.sign(
        {
            username,
            id
        },
        SECRET,
        {
            expiresIn: '2 days'
        }
    )
}

module.exports = {
    login: async (req, res) => {
        let { username, password } = req.body
        const token = createToken(username, password)
        res.sendStatus(200).send(token)
    },
    register: async (req, res) => {
        console.log('register')
        res.sendStatus(200)
    },
}