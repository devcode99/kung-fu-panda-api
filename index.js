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
// connectToMongoDB()
// Connect to MongoDB
app.use((req, res) => {
  try {
    connectToMongoDB(req, res)
  } catch (error) {
    res.send({
      message: 'Error',
      content: error
    })
  }

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

