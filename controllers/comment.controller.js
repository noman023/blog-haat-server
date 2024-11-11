const Comment = require("../models/comment.model");

// Get all comments for a specific blog post
async function getComments(req, res) {
  try {
    const { blogId } = req.query;

    const comments = await Comment.find({ blogId });

    if (!comments) {
      return res.status(404).send("No comments found!");
    }

    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send("Error retrieving comments: " + error.message);
  }
}

// Add a new comment to a specific blog post
async function addComment(req, res) {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    res.status(201).send("Comment added successfully!");
  } catch (error) {
    res.status(500).send("Error adding comment: " + error.message);
  }
}
module.exports = { getComments, addComment };
