import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardHeader, Divider, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, CardMedia, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import axios from 'axios';

const experiences = [
  { title: 'Travel to Japan', description: 'An amazing journey exploring the culture and food of Japan.', images: ['https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=original', 'https://media.istockphoto.com/id/1345059895/photo/alley-of-memories.webp?b=1&s=170667a&w=0&k=20&c=QXXwjyvDdbW-t18d9J8_u_no6GQeclmOE5YGsmu_PiM='] },
  { title: 'Exploring Paris', description: 'Discover the beauty and history of Paris, from the Eiffel Tower to charming streets.', images: ['https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D', 'https://cdn.britannica.com/36/135436-050-ED1D0FCE/skyline-Eiffel-Tower-France-Paris.jpg'] },
  { title: 'Safari in Kenya', description: 'A thrilling safari adventure through the Kenyan savannah.', images: ['https://media.istockphoto.com/id/697689066/photo/three-giraffe-in-national-park-of-kenya.jpg?s=612x612&w=0&k=20&c=PkC1FAG_dl35Q89Qrfsr_N7siaC645dy8EmP5SekYCI=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cKUwDIq4WHkgA9yAjfe4oO9Yh9bm79KSsQ&s'] },
];

function ExperienceList() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'CLOUDINARY UPLOAD PRESET');

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
    navigate('/login');
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImageDialog = () => {
    setSelectedImage(null);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          My Travel Experiences
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, backgroundColor: 'white', borderRadius: '25px' }}>
        {experiences.map((experience, index) => (
          <Card key={index} sx={{ maxWidth: 600, mx: 'auto', borderRadius: '25px', borderColor: 'lightgray', borderWidth: 1, borderStyle: 'solid' }}>
            <CardHeader title={experience.title} />
            <Divider />
            <CardContent>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {experience.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {experience.images.map((image, idx) => (
                  <CardMedia
                    key={idx}
                    component="img"
                    height="140"
                    image={image}
                    alt={`Experience image ${idx + 1}`}
                    sx={{ width: 'calc(50% - 16px)', maxWidth: '100%', borderRadius: '10px', cursor: 'pointer' }}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Experience
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

      <Dialog open={!!selectedImage} onClose={handleCloseImageDialog}>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseImageDialog}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default ExperienceList;
