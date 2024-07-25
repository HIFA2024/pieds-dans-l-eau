import React, { useState } from "react";
import axios from 'axios'


function Test() {
const [file,setfile]= useState(null)
const [name,setname]= useState('')
const [password,setpassword]= useState('')
const [image_url,setimage_url]=useState('')
const handleCreateUser = async () => {
  if (!name || !password || !file) {
    console.error('Please fill in all fields');
    return;
  }

  try {
    // Step 1: Upload image to Cloudinary directly from front end
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'firsttime'); // Replace with your Cloudinary upload preset

    const cloudinaryResponse = await axios.post(
      'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
      formData
    );
    // Step 2: Create user with Cloudinary image URL
    // const imageUrl = cloudinaryResponse.data.secure_url;
    console.log( cloudinaryResponse.data.secure_url)
    setimage_url( cloudinaryResponse.data.secure_url)

    const createUserResponse = await axios.post('http://localhost:8080/users/adduser', {
      fullname:name,
      password:password,
      image_url: image_url
    });

    if (createUserResponse.status === 201) {
      console.log('User created successfully');
      // Optionally clear form fields after successful creation
      setname('');
      setpassword('');
      setfile(null);
      setimage_url('')
    } else {
      console.error('Failed to create user');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
return (
  <div>
    <input type="file" onChange={(e)=>{setfile(e.target.files[0])}}/>
    <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
    <input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
    <button onClick={handleCreateUser}>ok</button>
   <img style={{height:'100px',width:'100px'}} src={image_url} alt="" />
  </div>
);

}

export default Test;
