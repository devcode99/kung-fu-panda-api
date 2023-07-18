// const mongoose = require('mongoose');
const {MongoClient} = require('mongodb')
require('dotenv').config();

async function connectToMongoDB() {
  try {
    // const client = await MongoClient.connect(process.env.MONGODB_URI)
    // const query = client.db(`kung_fu_panda`)
    // await mongoose.connect(`${process.env.MONGODB_URI}kung_fu_panda`);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // throw new Error(error)
  }
}

module.exports = connectToMongoDB;