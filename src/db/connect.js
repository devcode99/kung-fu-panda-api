// const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

async function connectToMongoDB() {
  try {
    const uri = "<connection string uri>";
    const client = new MongoClient(`mongodb+srv://ddev61032:RgVYwTu74DeKbbE2@cluster0.snlwgd0.mongodb.net`);
    // await const database = client.db('sample_mflix');
    // await mongoose.connect('mongodb+srv://ddev61032:RgVYwTu74DeKbbE2@cluster0.snlwgd0.mongodb.net/kung_fu_panda');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error(error)
  }
}

module.exports = connectToMongoDB;