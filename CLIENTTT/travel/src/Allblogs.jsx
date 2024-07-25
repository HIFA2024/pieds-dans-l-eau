import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const experiences = [
    { title: 'Travel to Japan', description: 'An amazing journey exploring the culture and food of Japan.', images: ['https://media.cnn.com/api/v1/images/stellar/prod/230210161917-01-japan-never-traveler-culture-tokyo.jpg?c=original'] },
    { title: 'Exploring Paris', description: 'Discover the beauty and history of Paris, from the Eiffel Tower to charming streets.', images: ['https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'] },
    { title: 'Safari in Kenya', description: 'A thrilling safari adventure through the Kenyan savannah.', images: ['https://media.istockphoto.com/id/697689066/photo/three-giraffe-in-national-park-of-kenya.jpg?s=612x612&w=0&k=20&c=PkC1FAG_dl35Q89Qrfsr_N7siaC645dy8EmP5SekYCI= '] },
];

function Allblogs() {
    return (
        <div className='container' style={{ position: 'inherit', marginLeft: '32%', marginTop: '8%', position:'absolute', zIndex : '-1' }}>
            {experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '40px' }}> {/* Increased marginBottom value */}
                    <Card sx={{ maxWidth: 545 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={exp.images[0]} // access the first image in the array
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {exp.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {exp.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read blog.
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Allblogs;
