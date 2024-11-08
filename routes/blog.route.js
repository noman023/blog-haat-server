const {
  addBlog,
  getAllBlogs,
  getSingleBlog,
} = require("../controllers/blog.controller");

const router = require("express").Router();

router.get("/", getAllBlogs).get("/:id", getSingleBlog).post("/add", addBlog);

module.exports = router;
