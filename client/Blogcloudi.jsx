import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogcouldi = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    content: '',
    image: null
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getall'); 
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleCreateBlog = async () => {
    try {
      const formData = new FormData();
      formData.append('content', newBlog.content);
      formData.append('image', newBlog.image);

      const response = await axios.post('http://localhost:3000/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Blog created successfully:', response.data);
      setNewBlog({
        content: '',
        image: null
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleFileChange = (e) => {
    setNewBlog({
      ...newBlog,
      image: e.target.files[0]
    });
  };

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <p>{blog.content}</p>
          <img src={blog.image_url} alt="Blog" />
        </div>
      ))}

      <h2>Create New Blog</h2>
      <input type="text" value={newBlog.content} onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })} placeholder="Enter content" />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleCreateBlog}>Create Blog</button>
    </div>
  );
};

export default Blogcouldi;