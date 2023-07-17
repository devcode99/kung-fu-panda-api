// index.js
const express = require('express')

/**
 * ROUTES
 */
// const migrationRouter = require('./src/routes/migrationRoutes')

const connectToMongoDB = require('./src/db/connect');

const app = express()
const PORT = 7000

app.use(express.json({

}))

// Connect to MongoDB
connectToMongoDB().then(() => {


  app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
  })

  app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })

  // app.use('/migrations', migrationRouter)

}).catch(error => {
  app.get('/error', (req, res) => {
    res.send({
      message: 'Fatta---------------------->',
      error
    })
  })
});

// Export the Express API
module.exports = app

