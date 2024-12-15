const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      name: {
        type: String,
        required: true,
      },
      password: {
        type: String
      },
      role: {
        type: String
      },
      bio: {
        type: String
      },
      isPublic: {
        type: Boolean
      },
      
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('User', userSchema)