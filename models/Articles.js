const mongoose = require("mongoose");

 // save reference to the schema constructor 
const Schema = mongoose.Schema;

 // create schema for each article 
const ArticlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary:  {
        type: String,
        required: true

     },
    link: {
        type: String,
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }
});

 //this will create our model from the schema above with mongoose
const Articles = mongoose.model("Articles", ArticlesSchema);

 module.exports = Articles; 