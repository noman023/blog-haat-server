const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  user: { type: String, required: true },
});

const Bookmark = model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
