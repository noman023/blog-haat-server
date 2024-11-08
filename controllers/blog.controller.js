const Blog = require("../models/blog.model");

async function addBlog(req, res) {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).send("Blog created successfully!");
  } catch (e) {
    res.status(400).send("Error creating blog: " + e.message);
  }
}

module.exports = { addBlog };
