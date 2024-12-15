const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      content: {
        type: String
      }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Comment', userSchema)