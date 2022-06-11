const express = require('express')
const cors = require('cors')
const categories = require('./categories.route.js')

const routes = express.Router()
routes.use(
    express.json(),
    cors({
        origin: '*'
    })
)

routes.get('/', (req, res) => {
    res.status(200).json({message: 'API active'})
})

routes.use('/categories', categories)

module.exports = routes