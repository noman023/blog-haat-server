const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  imgURL: { type: String, required: true },
  content: { type: String, required: true },
  writerName: { type: String, required: true },
  writerEmail: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
});

const Bookmark = model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
