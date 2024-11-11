const {
  addComment,
  getComments,
} = require("../controllers/comment.controller");

const router = require("express").Router();

router.get("/", getComments).post("/add", addComment);

module.exports = router;
