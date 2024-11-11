const Blog = require("../models/blog.model");

// get all blogs
async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find();

    res.status(200).send(blogs);
  } catch (e) {
    res.status(400).send("Something went wrong!");
  }
}

// get a single blog
async function getSingleBlog(req, res) {
  try {
    const blog = await Blog.find({ _id: req.params.id });

    res.status(200).send(blog);
  } catch (e) {
    res.status(400).send("Something went wrong!");
  }
}

// create a blog
async function addBlog(req, res) {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).send("Blog created successfully!");
  } catch (e) {
    res.status(400).send("Error creating blog: " + e.message);
  }
}

async function updateBlog(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    const dataToUpdate = {};
    if (data.title) dataToUpdate.title = data.title;
    if (data.content) dataToUpdate.content = data.content;
    if (data.category) dataToUpdate.category = data.category;

    // Update the blog with the new data
    await Blog.findByIdAndUpdate(id, { $set: dataToUpdate });

    return res.status(200).send("Blog updated successfully!");
  } catch (error) {
    res.status(500).send("Error updating blog: " + e.message);
  }
}

module.exports = { getAllBlogs, getSingleBlog, addBlog, updateBlog };
