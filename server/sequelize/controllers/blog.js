const Blog = require('../modells/blogs.js');
const cloudinary = require('../../cloudinaryconfig.js');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching blogs");
  }
};

const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching blog");
  }
};

const createBlog = async (req, res) => {
  const { content, image } = req.body;

  try {
    const uploadResult = await cloudinary.uploader.upload(image.path);

    const newBlog = await Blog.create({
      content,
      image_url: uploadResult.secure_url
    });

    res.status(201).json({ message: "Blog created successfully", newBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding blog" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { content, image } = req.body;

  try {
    let blogToUpdate = await Blog.findByPk(id);
    if (!blogToUpdate) {
      return res.status(404).send("Blog not found");
    }

    blogToUpdate.content = content;
    if (image) {
      const uploadResult = await cloudinary.uploader.upload(image.path);
      blogToUpdate.image_url = uploadResult.secure_url;
    }

    await blogToUpdate.save();

    res.json(blogToUpdate);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating blog");
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogToDelete = await Blog.findByPk(id);
    if (!blogToDelete) {
      return res.status(404).send("Blog not found");
    }
    await blogToDelete.destroy();
    res.status(200).send("Blog deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting blog");
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};