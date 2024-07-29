const { Blog } = require('../database/sequelize');



exports.addBlog = async (req,res) =>{
    const { title, content, place, image_url,userId } = req.body;
  
    if (!title || !content || !place || !image_url) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newBlog = await Blog.create({ title, content,place , image_url ,userId});
      res.status(201).json({ message: 'Blog added successfully', blog: newBlog });
    } catch (error) {
      res.status(500).json({ message: 'Error adding blog', error: error.message });
    }
  }


// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll(); 
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving blogs', error: error.message });
  }
};

exports.getBlogsByUserId = async (req, res) => {
    const userId = req.params.userId; // Extract userId from request parameters

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const blogs = await Blog.findAll({ where: { UserId: userId } });

        if (blogs.length === 0) {
            return res.status(404).json({ message: 'No blogs found for this user' });
        }

        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving blogs', error: error.message });
    }
};

// Get a blog by place
exports.getBlogByplace = async (req, res) => {
    const place = req.params.place; // Extract place from request parameters

    if (!place) {
        return res.status(400).json({ message: 'Blog place is required' });
    }

    try {
        const blog = await Blog.findOne({ where: { place: place } });

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json([ blog ]);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving blog', error: error.message });
    }
};



// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
    const idblog = req.params.id; // Extract idblog from request parameters
  
    if (!idblog) {
      return res.status(400).json({ message: 'Blog ID is required' });
    }
  
    try {
      // Destroy the blog with the specified idblog
      const result = await Blog.destroy({ where: { idblog } });
  
      if (result === 0) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
  };


  exports.updateBlog = async (req, res) => {
    const idblog = req.params.idblog; // Extract idblog from request parameters
    const updatedFields = req.body; // Extract updated fields from request body
  
    if (!idblog) {
      return res.status(400).json({ message: 'Blog ID is required' });
    }
  
    try {
      // Find the blog to update
      const blog = await Blog.findByPk(idblog);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Update the blog with new data
      const updatedBlog = await blog.update(updatedFields);
  
      res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
    } catch (error) {
      res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
  };
  