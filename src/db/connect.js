const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}kung_fu_panda`);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error(error)
  }
}

module.exports = connectToMongoDB;