var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
  text: String,
  author: {
    id:{
      type : mongoose.Schema.Types.ObjectId,
      ref  : "User"
    },
    username : String,
    thumbnail: String
  }
});

module.exports = mongoose.model("Comment", commentSchema);
