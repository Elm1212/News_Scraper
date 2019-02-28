const mongoose = require("mongoose");

// save reference to schema constructor
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    validate: [
      function(input) {
        return input.length >= 1;
      },
      "Please input more than 1 character for comment"
    ]
  }
});

// create the model using the mongoose method
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;