const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      description: {
        type: String
      },
      content: {
        type: String
      },
      tags: {
        type: [String]
      },
      likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
      }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Post', userSchema)