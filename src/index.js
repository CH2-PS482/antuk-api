require('dotenv').config()

const PORT = process.env.PORT || 5000
const express = require('express')

const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')

const app = express()

app.use(express.json())

// Route
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.use('/', (req, res) => {
  res.send('Success fetching the API')
})

