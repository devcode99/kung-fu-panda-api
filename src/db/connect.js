// const mongoose = require('mongoose');
// const {MongoClient} = require('mongodb')
require('dotenv').config();

async function connectToMongoDB(req, res) {
  try {
    // const client = await MongoClient.connect(process.env.MONGODB_URI)
    // const query = client.db(`kung_fu_panda`)
    await require('../../node_modules/mongoose').connect(`${process.env.MONGODB_URI}kung_fu_panda`);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    res.status(500).send({
        error,
        message: 'Yeah, Fatta----------->'
    })
    // throw new Error(error)
  }
}

module.exports = connectToMongoDB;