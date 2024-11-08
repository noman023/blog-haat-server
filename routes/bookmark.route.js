const {
  addToBookmark,
  getAllBookmarkedBlogs,
  getSingleBookmarkedBlog,
} = require("../controllers/bookmark.controller");

const router = require("express").Router();

router
  .get("/", getAllBookmarkedBlogs)
  .get("/:id", getSingleBookmarkedBlog)
  .post("/add", addToBookmark);

module.exports = router;
