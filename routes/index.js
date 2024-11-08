const router = require("express").Router();

// router
const blogRouter = require("./blog.route");
const bookmarkRouter = require("./bookmark.route");

// routes
router.use("/blog", blogRouter);
router.use("/bookmark", bookmarkRouter);

module.exports = router;
