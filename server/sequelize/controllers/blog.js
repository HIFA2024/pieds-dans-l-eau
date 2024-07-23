const blog =require('../modells/blogs.js')


const getAllBlogs = async (req, res) => {
    try {
      const blogs = await blog.findAll();
      res.json(blogs);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching blogs");
    }
  };
  
  const getBlogById = async (req, res) => {
    const id = req.params.id;
    try {
      const blogss = await blog.findByPk(id);
      if (!blogss) {
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
      const newBlog = await blog.create({ content, image });
      res.status(201).send({ message: "Blog created successfully", newBlog });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding blog");
    }
  };
  
  const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { content, image } = req.body;
    try {
      let blogToUpdate = await blog.findByPk(id);
      if (!blogToUpdate) {
        return res.status(404).send("Blog not found");
      }
      await blogToUpdate.update({ content, image });
      res.json(blogToUpdate);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating blog");
    }
  };
  
  const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
      const blogToDelete = await blog.findByPk(id);
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