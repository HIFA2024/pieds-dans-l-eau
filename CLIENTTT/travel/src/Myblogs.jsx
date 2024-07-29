

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

function Myblogs({ id, setrefresh, changeview, settblogid }) {
  const [mydata, setmydata] = useState([]);

  

  useEffect(() => {
    console.log(id);
    axios.get(`http://127.0.0.1:8080/blogs/getall/${id}`)
      .then((response) => {
        console.log(response);
        setmydata(response.data.blogs);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Your Library is empty",
          text: "Click on the add button to add your experience",
        });
        changeview('allblogs')
        console.error("Error fetching data:", error);
      });
  }, [setrefresh]);

  const handleDelete = (blogId) => {
    axios.delete(`http://127.0.0.1:8080/blogs/delete/${blogId}`)
      .then(() => {
        console.log('Delete successful');
        setrefresh(); // Trigger refresh in parent
        changeview('myblogs'); // Change view if needed
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Blog deleted succesfully",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((err) => {
        console.error('Error deleting blog:', err);
      });
  }

  return (
    <div className='container' style={{ position: 'inherit', marginLeft: '30%', marginTop: '8%', position: 'absolute', zIndex: '-1' }}>
      {mydata.map((exp, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <Card sx={{ maxWidth: 645 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={exp.image_url}
                alt="Blog"
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
              <Button
                size="small"
                color="primary"
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
                }}
              >
                Read blog.
              </Button>
            </CardActions>
            <div>
              <button className="save" 
              onClick={()=>{ settblogid(exp.idblog)
                changeview('updateblogs') 
                             console.log(exp.idblog);
                            }}
                            style={{height:'50px'}}
                            >
                <span>UPDATE BLOG</span>
              </button>
            </div>
            <div style={{marginLeft:'81%', marginTop:'-7%'}}>
            <button class="butto" onClick={() => handleDelete(exp.idblog)} >
                <svg viewBox="0 0 448 512" class="svgIcon"
                 >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                </button>
              {/* <button onClick={() => handleDelete(exp.idblog)}>Delete</button> */}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
} 

export default Myblogs;


// margin-left: 81%;
// margin-top: -7%;