const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  imgURL: { type: String, required: true },
  content: { type: String, required: true },
  writerName: { type: String, required: true },
  writerEmail: { type: String, required: true },
});

const Blog = model("Blog", blogSchema);
module.exports = Blog;
