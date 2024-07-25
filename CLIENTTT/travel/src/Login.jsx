import React ,{useState} from "react";
import axios from "axios";

const Login = ({homevisibilty,changeview}) => {

  const [file,setfile]= useState(null)
  const [name,setname]= useState('')
  const [password,setpassword]= useState('')
  const [image_url,setimage_url]=useState('')
   const [loggedIn, setLoggedIn] = useState(false);


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
const handleLogin = async () => {
  try {
    const loginResponse = await axios.post('http://localhost:8080/users/login', {
      fullname: name,
      password: password
    });

    if (loginResponse.status === 200) {
      const token = loginResponse.data.token;
      // Store token in local storage
    //   localStorage.setItem('token', token);
      console.log('Login successful, token:', token);
      homevisibilty(true)
      changeview('allblogs')
      setLoggedIn(true); // Update login state
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};



 return (
  <div>
    <div style = {{
      position :'absolute',
      marginTop: '5%',
      marginLeft: '59%',
    }}>
      <img style={{
        width :'100px',
        height :'100px'
      }} src="https://th.bing.com/th?id=OIP.AxSZxfJ0tsDUiyrlS3Cm7QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
    </div>
    <div style={{
      position: 'absolute',
      marginTop: '0%%',
      marginLeft: '39%',
      fontSize: 'xx-large'
    }}>
      <h1>TRAVSHOT</h1>
    </div>
     <div style={{
      position: 'absolute',
      marginTop: '20%',
      marginLeft: '42%'
      
    }}>
      <input style={{borderRadius : '10px',
        backgroundColor :"white",
        color : 'black',
        height : '30px',
        width : '240px'
      }} type="text" placeholder="fullname" onChange={(e)=>{setname(e.target.value)}} />
      </div>
      <div style={{
      position: 'absolute',
      marginTop: '24%',
      marginLeft: '42%'
      
    }}>
      <input style={{borderRadius : '10px',
        backgroundColor :"white",
        color : 'black',
        height : '30px',
        width : '240px'
      }}type="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/>
      </div>
      <div  style={{
      position: 'absolute',
      marginTop: '30%',
      marginLeft: '43%'
      
    }}>
      <input
  type="file" id="uploadBtn"
  onChange={(e) => { setfile(e.target.files[0]); }}
   style={{
    display:'none'
   }
   }
 
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
      {/* <input  style={{borderRadius : '20px'}} type="file" onChange={(e)=>{setfile(e.target.files[0])}}/> */}
      </div>
      <div  style={{
      position: 'absolute',
      marginTop: '39%',
      marginLeft: '38%'
      
    }}>
        <button class="btn-12" onClick={handleCreateUser}><span>SIGN UP</span></button>

      </div>
       <div style={{
      position: 'absolute',
      marginTop: '39%',
      marginLeft: '54%'
      
    }}>
        <button class="btn-12" onClick={handleLogin}><span>LOG IN</span></button>
       </div>
       <div style={{position:'absolute' , marginTop :'47%' , marginLeft:'28%',    fontSize: 'x-small'}}>
        <p style={{position:'absolute',    margin: 'auto', marginLeft: '77px'}}>TravelingBlogs.com is your ultimate destination for exploring the world through the eyes of passionate travelers.</p>
        <p> Our website hosts a rich tapestry of travel blogs, each offering unique insights, captivating stories, and practical tips from globetrotters across the globe.&copy;
        </p>
       </div>
  </div>
 )

}

export default Login;