const {
  getBookmarksForUser,
  addToBookmark,
  deleteBookmark,
} = require("../controllers/bookmark.controller");

const router = require("express").Router();

router
  .get("/", getBookmarksForUser)
  .post("/add", addToBookmark)
  .delete("/:id", deleteBookmark);

module.exports = router;
