import React, { useState } from "react";
import './update.css'
import axios from "axios";

const Account = ({ deleteuser, id, updtuser,setturl }) => {
  const [fullname, setfullname] = useState('');
  const [file, setfile] = useState(null);
  const [image_url, setimage_url] = useState('');

  const handledel = async () => {
    deleteuser(id);
  };

  const handleup = async () => {
    if (!fullname && !file) {
      console.error('Please fill in one of the fields');
      return;
    }

    try {
      let updatedImageUrl = image_url;

      // Step 1: Upload image to Cloudinary if a new file is selected
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'firsttime'); // Replace with your Cloudinary upload preset

        const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
          formData
        );
        updatedImageUrl = cloudinaryResponse.data.secure_url;
      }

      const blog = {
        fullname: fullname,
        image_url: updatedImageUrl,
      };

      updtuser(id, blog);
      setturl(updatedImageUrl)
    } catch (error) {
      console.error('Error updating user:', error);
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
        marginLeft: '7%'
      }}>
        <h1>UPDATE YOUR CREDENTIALS.</h1>
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '15%',
        marginLeft: '7%'
      }}>
        <input
          style={{
            borderRadius: '10px',
            backgroundColor: "white",
            color: 'black',
            height: '30px',
            width: '400px'
          }}
          type="text"
          placeholder="Change your fullname"
          onChange={(e) => { setfullname(e.target.value); }}
        />
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '29%',
        marginLeft: '12%'
      }}>
       <input style={{width:'4px',marginLeft:'10px'}} type="file" onChange={(e) => { setfile(e.target.files[0]); }} 
       />
        <label htmlFor="uploadBtn"
style={{
  display:'inline-block',
  textTransform :'uppercase',
  color:'black',
  backgroundColor :'white',
  textAlign :'center',
  padding :'15px 40px',
  fontSize :'18px',
  letterSpacing :'1.5px',
  userSelect :'none',
  cursor :'pointer',
  boxShadow :'5px 15px 25px rgba(0,0,0,0.35)',
  borderRadius :'10px'
 }
 }
        >CHANGE IMAGE</label>
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '49%',
        marginLeft: '11%'
      }}>
        <button className="save" onClick={handleup}><span>SAVE CHANGES</span></button>
      </div>
      <div style={{
        position: 'absolute',
        marginTop: '49%',
        marginLeft: '40%'
      }}>
        <button className="butto" onClick={handledel}>
          <svg viewBox="0 0 448 512" className="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Account;
