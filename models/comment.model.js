const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  blogId: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  comment: { type: String, required: true },
  commenterName: { type: String, required: true },
  commenterEmail: { type: String, required: true },
  commenterImg: { type: String, required: true },
});

const Comment = model("Comment", commentSchema);
module.exports = Comment;
