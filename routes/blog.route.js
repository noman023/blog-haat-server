const { addBlog } = require("../controllers/blog.controller");

const router = require("express").Router();

router.post("/add", addBlog);

module.exports = router;
