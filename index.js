// index.js
const express = require('express')
// import express from 'express'

/**
 * ROUTES
 */
// const migrationRouter = require('./src/routes/migrationRoutes')

// import {connectToMongoDB} from './src/db/connect.js'
const connectToMongoDB = require('./src/db/connect');

const app = express()
const PORT = 7000

app.use(express.json({

}))

// Connect to MongoDB
app.use((req, res) => {
  connectToMongoDB(req, res)

})


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

// app.use('/migrations', migrationRouter)


// Export the Express API
module.exports = app
// export default app;

