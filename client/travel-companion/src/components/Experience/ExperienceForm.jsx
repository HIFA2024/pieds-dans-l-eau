
import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

function ExperienceForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'your_upload_preset');

    const res = await axios.post('https://api.cloudinary.com/v1_1/dqkvtsybe/image/upload', formData);
    const imageUrl = res.data.secure_url;

    
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
      <Typography variant="h2" gutterBottom>
        Share Your Experience
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="content"
          label="Content"
          name="content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          style={{ marginTop: '16px', marginBottom: '16px' }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
}

export default ExperienceForm;
