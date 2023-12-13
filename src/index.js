require('dotenv').config()

const PORT = process.env.PORT || 5000
const express = require('express')

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

// const middlewareLogRequest = require('./middleware/logs')

const app = express()

// Middlewares
// app.use(middlewareLogRequest)
app.use(express.json())

// Route
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


