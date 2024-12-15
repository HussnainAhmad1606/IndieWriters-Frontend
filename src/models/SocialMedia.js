const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      facebook: {
        type: String
      },
      twitter: {
        type: String
      },
      medium: {
        type: String
      },
      substack: {
        type: String
      }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('SocialMedia', userSchema)