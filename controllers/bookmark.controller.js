const Bookmark = require("../models/bookmark.model");

// get bookmarked blogs
async function getBookmarksForUser(req, res) {
  try {
    const { user } = req.query;
    const bookmarks = await Bookmark.find({ user }).populate("blog");

    res.status(200).send(bookmarks);
  } catch (e) {
    res.status(500).send("Something went wrong!");
  }
}

// create a blog
async function addToBookmark(req, res) {
  try {
    const { blog, user } = req.body;

    // Check if a bookmark already exists for this blog and user
    const existingBookmark = await Bookmark.findOne({ blog, user });
    if (existingBookmark) {
      return res.status(409).send("Bookmark already exists!");
    }

    const bookmark = new Bookmark({ blog, user });
    await bookmark.save();

    res.status(201).send("Bookmark added successfully!");
  } catch (e) {
    res.status(400).send("Error adding bookmark: " + e.message);
  }
}

// Delete a bookmark by its ID
async function deleteBookmark(req, res) {
  try {
    const { id } = req.params;

    const bookmark = await Bookmark.findByIdAndDelete(id);

    if (!bookmark) {
      return res.status(404).send("Bookmark not found");
    }

    res.status(200).send("Bookmark deleted successfully");
  } catch (e) {
    res.status(500).send("Error deleting bookmark: " + e.message);
  }
}

module.exports = {
  getBookmarksForUser,
  addToBookmark,
  deleteBookmark,
};
