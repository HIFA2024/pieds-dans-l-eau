
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

function Allblogs({ data,id }) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState(null);
    const [commentContent, setCommentContent] = useState('');
    // const [userId] = useState(1); // Replace with actual user ID from your auth system

    const handleClickOpen = (blogId) => {
        setSelectedBlogId(blogId);
        axios.get(`http://127.0.0.1:8080/comments/getall/${blogId}`)
            .then(response => {
                setComments(response.data.comments);
                setOpen(true);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCommentChange = (event) => {
        setCommentContent(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (!commentContent.trim()) {
            Swal.fire('Error', 'Comment cannot be empty', 'error');
            return;
        }

        axios.post('http://127.0.0.1:8080/comments/addcomment', {
            blogId: selectedBlogId,
            userId: id,
            content: commentContent
        })
        .then(response => {
            setComments(prevComments => [
                ...prevComments,
                response.data.comment
            ]);
            setCommentContent(''); // Clear the input field
            Swal.fire('Success', 'Comment added successfully', 'success');
        })
        .catch(error => {
            console.error('Error adding comment:', error);
            Swal.fire('Error', 'Failed to add comment', 'error');
        });
    };

    return (
        <div className='container' style={{ position: 'inherit', marginLeft: '30%', marginTop: '8%', position: 'absolute', zIndex: '-1' }}>
            {data.map((exp, index) => (
                <div key={index} style={{ marginBottom: '40px' }}>
                    <Card sx={{ maxWidth: 645 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="400"
                                image={exp.image_url}
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
                                onClick={() => Swal.fire({
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
                                })}
                            >
                                Read blog.
                            </Button>
                            <Button size="small" color="primary" onClick={() => handleClickOpen(exp.idblog)}>
                                Read Comments.
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            ))}

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Comments</DialogTitle>
                <DialogContent>
                    {comments.length === 0 ? (
                        <Typography>No comments available.</Typography>
                    ) : (
                        comments.map((comment, index) => (
                            <div key={index}>
                                <Typography variant="h6">{comment.author}</Typography>
                                <Typography variant="body1">{comment.content}</Typography>
                                <hr />
                            </div>
                        ))
                    )}
                    <TextField
                        label="Add a comment"
                        multiline
                        rows={1}
                        variant="outlined"
                        fullWidth
                        value={commentContent}
                        onChange={handleCommentChange}
                        style={{ marginTop: '16px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleCommentSubmit} color="primary">Add Comment</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Allblogs;

