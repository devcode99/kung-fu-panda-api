const mongoose = require('mongoose');

async function connectToMongoDB() {
//   try {
    await mongoose.connect('mongodb+srv://ddev61032:RgVYwTu74DeKbbE2@cluster0.snlwgd0.mongodb.net/kung_fu_panda');
    console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
}

module.exports = connectToMongoDB;