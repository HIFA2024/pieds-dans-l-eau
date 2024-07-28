import React, { useState } from "react";
import './add.css'
import axios from "axios";

const Updateblog = ({ blogid, setrefresh, changeview }) => {
  const [title, settitle] = useState('');
  const [content, setconent] = useState('');
  const [place, setplace] = useState('');
  const [file, setfile] = useState(null);
  const [image_url, setimage_url] = useState('');

  const handleaddclick = async () => {
    // Check if at least one field is filled
    if (!title && !content && !place && !file) {
      console.error('Please fill in at least one field');
      return;
    }

    try {
      let updatedImageUrl = image_url;

      // Upload image to Cloudinary if a file is selected
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'firsttime'); // Replace with your Cloudinary upload preset

        const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
          formData
        );
        console.log(cloudinaryResponse.data.secure_url);
        updatedImageUrl = cloudinaryResponse.data.secure_url;
      }

      // Prepare the blog object, omitting fields that are empty
      const blog = {
        title: title || undefined,
        content: content || undefined,
        place: place || undefined,
        image_url: updatedImageUrl || undefined
      };

      // Remove undefined properties from the blog object
      const filteredBlog = Object.fromEntries(
        Object.entries(blog).filter(([_, value]) => value !== undefined)
      );

      console.log(blogid);
      await axios.put(`http://127.0.0.1:8080/blogs/update/${blogid}`, filteredBlog);

      setrefresh(); // Trigger refresh in parent component
      changeview('myblogs'); // Navigate to 'myblogs' view
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div style={{
      position: 'absolute',
      marginLeft: '32%',
      marginTop: '10%',
      borderColor: 'black',
      alignItems: 'center',
      width: '800px'
    }}>
      <div style={{
        position: 'absolute',
        marginTop: '-4%',
        marginLeft: '1%'
      }}>
        <h1>UPDATE YOUR EXPERIENCE.</h1>
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '10%',
        marginLeft: '7%'
      }}>
        <input
          type="text"
          placeholder="Title"
          style={{
            borderRadius: '10px',
            backgroundColor: "white",
            color: 'black',
            height: '30px',
            width: '400px'
          }}
          onChange={(e) => { settitle(e.target.value) }}
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '17%',
        marginLeft: '7%'
      }}>
        <input
          type="text"
          placeholder="Content"
          style={{
            borderRadius: '10px',
            backgroundColor: "white",
            color: 'black',
            height: '30px',
            width: '400px'
          }}
          onChange={(e) => { setconent(e.target.value) }}
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '24%',
        marginLeft: '7%'
      }}>
        <input
          type="text"
          placeholder="Place"
          style={{
            borderRadius: '10px',
            backgroundColor: "white",
            color: 'black',
            height: '30px',
            width: '400px'
          }}
          onChange={(e) => { setplace(e.target.value) }}
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '38%',
        marginLeft: '17%'
      }}>
        <input
          style={{ width: '4px', marginLeft: '10px' }}
          type="file"
          onChange={(e) => { setfile(e.target.files[0]); }}
        />
        <label
          htmlFor="uploadBtn"
          style={{
            display: 'inline-block',
            textTransform: 'uppercase',
            color: 'black',
            backgroundColor: 'white',
            textAlign: 'center',
            padding: '15px 40px',
            fontSize: '18px',
            letterSpacing: '1.5px',
            userSelect: 'none',
            cursor: 'pointer',
            boxShadow: '5px 15px 25px rgba(0,0,0,0.35)',
            borderRadius: '10px'
          }}
        >
          UPLOAD IMAGE
        </label>
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '57%',
        marginLeft: '19%'
      }}>
        <button className="add" onClick={handleaddclick}>
          <span>EDIT EXPERIENCE</span>
        </button>
      </div>
    </div>
  );
};

export default Updateblog;

