const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    category: String,
    googleId: String,
    thumbnail: String,
    skill: String,
    state: String,
    PhoneNumber: String,
    email : String,
    DoB: String,
    hourlyRate: String,
    aboutTalents: String,
    youtubeUrl: String,
    youtubeUrl2: String,
    comments:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Comment"
    }
  ]
});

const User = mongoose.model('user', userSchema);

module.exports = User;
