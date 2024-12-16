const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      message: {
        type: String
      }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Request', userSchema)