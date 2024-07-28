import React, { useState } from "react";
import './add.css'
import axios from "axios";




const Addblog =({iduser,addblog})=>{
  const [title,settitle]=useState('')
  const [content,setconent]=useState('')
  const [place,setplace]=useState('')
  const [file,setfile]= useState(null)
  const [image_url,setimage_url]=useState('')



const handleaddclick =async()=>{
  if (!title || !content || !place || !file) {
    console.error('Please fill in all fields' , title,file,content,place);
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
    console.log( cloudinaryResponse.data.secure_url)
    setimage_url( cloudinaryResponse.data.secure_url)
const blog =   {
 title:title,
  content:content,
  place :place,
  image_url: image_url,
  userId : iduser}



    addblog(blog)

   
    
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

    return (
        <div style={{position:'absolute',
            marginLeft :'32%',
            marginTop :'10%',
            borderColor : 'black',
            alignItems :'center',
            width: '800px'
            
        }}>
            <div style={{
                   position: 'absolute',
                   marginTop: '-4%',
                   marginLeft: '1%'  
    }}>
                <h1>YOUR EXPERIENCE INTERESTS US.</h1>
            </div>
            <div style={{
                 position: 'absolute',
                  marginTop: '10%',
                    marginLeft: '7%'
    }}>
                <input type="text" placeholder="Title"  style={{borderRadius : '10px',
                backgroundColor :"white",
                color : 'black',
                height : '30px',
                width : '400px'
              }}
              onChange={(e)=>{settitle(e.target.value)}}/>
            </div>
            <div style={{
                    position: 'absolute',
                    marginTop: '17%',
                    marginLeft: '7%'
    }}> 
                <input type="text" placeholder="content"
                 style={{borderRadius : '10px',
                    backgroundColor :"white",
                    color : 'black',
                    height : '30px',
                    width : '400px'
                  }}
                  onChange={(e)=>{setconent(e.target.value)}} />
            </div>
            <div style={{
                    position: 'absolute',
                    marginTop: '24%',
                    marginLeft: '7%'
    }}>
                <input type="text" placeholder="place" 
                style={{borderRadius : '10px',
                    backgroundColor :"white",
                    color : 'black',
                    height : '30px',
                    width : '400px'
                  }} onChange={(e)=>{setplace(e.target.value)}}/>
            </div>
            <div style={{
                    position: 'absolute',
                    marginTop: '38%',
                    marginLeft: '17%'
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
>UPLOAD IMAGE</label>
            </div>
            <div style={{
                    position: 'absolute',
                    marginTop: '57%',
                    marginLeft: '19%'
    }}> 
            <button className="add" onClick={handleaddclick}> <span>ADD EXPERIENCE</span></button>
            </div>
        </div>
    )
}

export default  Addblog
