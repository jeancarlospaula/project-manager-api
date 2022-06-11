require('dotenv').config()

const connectToDatabase = require('./database/connection/connect')
const express = require('express')
const routes = require('./routes/routes')
const app = express()
const port = process.env.PORT || 3000

app.use('/', routes)

connectToDatabase()
app.listen(port, () => console.log(`Server active on port: ${port}`))