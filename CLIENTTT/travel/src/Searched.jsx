import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2';

function Searched({ data }) {
    // Ensure data is an array
    const blogData = Array.isArray(data) ? data : [];

    return (
        <div className='container' style={{ position: 'inherit', marginLeft: '30%', marginTop: '8%', position: 'absolute', zIndex: '-1' }}>
            {blogData.length > 0 ? (
                blogData.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '40px' }}>
                        <Card sx={{ maxWidth: 645 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={exp.image_url} // access the first image in the array
                                    alt="Blog image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span style={{ fontSize: 'x-large' }}>📌</span> {exp.place}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary"
                                    onClick={() => {
                                        Swal.fire({
                                            title: exp.content,
                                            showClass: {
                                                popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                                `
                                            },
                                            hideClass: {
                                                popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                                `
                                            }
                                        });
                                    }}>
                                    Read blog.
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))
            ) : (
                <Typography variant="h6" color="text.secondary">
                    No blogs found.
                </Typography>
            )}
        </div>
    );
}

export default Searched;

