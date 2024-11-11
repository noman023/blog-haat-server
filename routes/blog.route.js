const {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} = require("../controllers/blog.controller");

const router = require("express").Router();

router
  .get("/", getAllBlogs)
  .get("/:id", getSingleBlog)
  .patch("/:id", updateBlog)
  .post("/add", addBlog);

module.exports = router;
