const mongoose = require("mongoose");

 // save reference to schema constructor
const Schema = mongoose.Schema; 

 const CommentsSchema = new Schema ({
    title: String,
    body: String
});

 // create the model using mongoose method
const Comments = mongoose.model("Comments", CommentsSchema);

 module.exports = Comments;