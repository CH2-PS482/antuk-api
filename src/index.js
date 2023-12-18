require('dotenv').config()

const PORT = process.env.PORT || 8080

const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const historyRoutes = require('./routes/history')

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true })) //x-www-form-url-encoded
app.use(express.json()) // raw json

// Route
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use('/history', historyRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// Handler for root endpoint
app.use('/', (req, res) => {
  res.send('Success fetching the API')
})

