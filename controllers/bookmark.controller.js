const Bookmark = require("../models/bookmark.model");

// get all blogs
async function getAllBookmarkedBlogs(req, res) {
  try {
    const bookmarkedBlogs = await Bookmark.find();

    res.status(200).send(bookmarkedBlogs);
  } catch (e) {
    res.status(400).send("Something went wrong!");
  }
}

// get a single blog
async function getSingleBookmarkedBlog(req, res) {
  try {
    const bookmarkedBlog = await Bookmark.find({ _id: req.params.id });

    res.status(200).send(bookmarkedBlog);
  } catch (e) {
    res.status(400).send("Something went wrong!");
  }
}

// create a blog
async function addToBookmark(req, res) {
  try {
    const bookmark = new Bookmark(req.body);
    await bookmark.save();

    res.status(201).send("Blog created successfully!");
  } catch (e) {
    res.status(400).send("Error creating blog: " + e.message);
  }
}

module.exports = {
  getAllBookmarkedBlogs,
  getSingleBookmarkedBlog,
  addToBookmark,
};
