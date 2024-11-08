const router = require("express").Router();

// router
const blogRouter = require("./blog.route");

// routes
router.use("/blog", blogRouter);

module.exports = router;
