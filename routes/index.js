const router = require("express").Router();

// router
const blogRouter = require("./blog.route");
const bookmarkRouter = require("./bookmark.route");
const commentRouter = require("./comment.route");

// routes
router.use("/blog", blogRouter);
router.use("/bookmark", bookmarkRouter);
router.use("/comment", commentRouter);

module.exports = router;
