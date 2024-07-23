import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardHeader, Divider, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import axios from 'axios';

const experiences = [
  { title: 'Travel to Japan', description: 'An amazing journey exploring the culture and food of Japan.' },
  { title: 'Exploring Paris', description: 'Discover the beauty and history of Paris, from the Eiffel Tower to charming streets.' },
  { title: 'Safari in Kenya', description: 'A thrilling safari adventure through the Kenyan savannah.' },
];

function ExperienceList() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
   
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); 

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', formData);
      const imageUrl = response.data.secure_url;

      
      console.log('Image URL:', imageUrl);

      
      setTitle('');
      setDescription('');
      setImage(null);
      handleClose();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleLogout = () => {
   
    console.log('Logging out...');
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        My Travel Experiences
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {experiences.map((experience, index) => (
          <Card key={index} sx={{ maxWidth: 600, mx: 'auto' }}>
            <CardHeader title={experience.title} />
            <Divider />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {experience.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Experience
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Experience</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload-image"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="upload-image">
            <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
              Upload Image
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ExperienceList;
