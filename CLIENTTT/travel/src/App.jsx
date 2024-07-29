import React, { useEffect, useState } from "react";
import './filebutt.css'
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Account from "./Account.jsx";
import Addblog from "./Addblog.jsx";
import About from "./About.jsx";
import Myblogs from "./Myblogs.jsx";
import axios from 'axios'
import Allblogs from "./Allblogs.jsx";
import Updateblog from "./Updateblog.jsx";
import Searched from "./Searched.jsx";
import Swal from "sweetalert2";

function App() {
  const[data,setdata] = useState([])
  const[showHome,setshowHome]=useState(false)
  const[view,setview]=useState('')
  const[ref,setref]=useState(false)
  const [id,setid]=useState(null)
  const [url,seturl]=useState('')
  const[blogid,setblogid] = useState(null)
  const[searcheddata,setsearcheddata]=useState([])

  const settblogid =(id)=>{
    setblogid(id)
    
  }

  const settid =(id)=>{
    setid(id)
  }

  const setturl =(url)=>{
    seturl(url)
  }

useEffect(()=>{
axios.get('http://127.0.0.1:8080/blogs/getall')
.then((response)=>{
  console.log(response);
   setdata(response.data.blogs)
   
})
},[ref])

const updtuser =(id,blog)=>{
axios.put(`http://127.0.0.1:8080/users/update/${id}`,blog)
.then(()=>{
  changeview('allblogs')
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Credentials Updated.",
    showConfirmButton: false,
    timer: 1500
  });
}).catch((err)=>{console.log(err);})
}
const deleteuser =(id)=>{
  axios.delete(`http://127.0.0.1:8080/users/delete/${id}`)
  .then(()=>{
    setshowHome(false)
    changeview('')
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User deleted succesfully",
      showConfirmButton: false,
      timer: 1500
    });
  })
}

const searchblog =(x)=>{
  axios.get(`http://127.0.0.1:8080/blogs/get/${x}`)
  .then((response)=>{
    console.log(response);
    setsearcheddata(response.data)
    console.log(response.data)
    changeview('searched')
  }).catch((err)=>{
    Swal.fire({
      icon: "error",
      title: "No matching results",
      text: "Try other place",
    });
    changeview('allblogs')
    console.log(err);})
}


const addblog=(blog)=>{
  axios.post('http://127.0.0.1:8080/blogs/addblog',blog)
  .then((createUserResponse)=>{
    if (createUserResponse.status === 201) {
      console.log('User created successfully');
      // Optionally clear form fields after successful creation
      
      // setimage_url('')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your experience has been added",
        showConfirmButton: false,
        timer: 1500
      });
      setrefresh(!ref)
      changeview('allblogs')
     
    } else {
      console.error('Failed to create user');
    }
  }).catch((err)=>{console.log(err);})
}



const setvisibility = (x)=>{
    setshowHome(x)
  }
  const setrefresh = (x)=>{
    setref(x)
  }
  const handleRefresh = () => {
    setref(!ref);
  }

  const changeview =(view) =>{
    setview(view)
  }

  const renderview=()=>{
    if (view==='account'){
      return <Account deleteuser={deleteuser} id={id} updtuser={updtuser} setturl={setturl}/>
    }
    if (view==='allblogs'){
      return <Allblogs id={id} data={data}/>
    }
    if (view==='addblog'){
      return <Addblog addblog={addblog} iduser={id} />
    }
    if (view==='about'){
      return <About />
    }
    if (view==='myblogs'){
      return <Myblogs settblogid={settblogid} id={id} setrefresh={handleRefresh} changeview={changeview} />
    }
    if (view==='updateblogs'){
      return <Updateblog changeview={changeview} blogid={blogid} setrefresh={handleRefresh} />
    }
    if (view==='searched'){
      return <Searched data={searcheddata}   />
    }
  }

  return (
    <div>
      <div style = {{visibility:showHome?'visible':'hidden'}}>
        <Home searchblog={searchblog} url={url} changeview={changeview} homevisibilty={setvisibility} setrefresh={setrefresh}/>
     </div>
     <div style={{visibility:showHome?'hidden':'visible'}}>
       <Login setturl={setturl} settid={settid} changeview={changeview} homevisibilty={setvisibility} />
     </div>
     {renderview()}
  </div>
  )
}

export default App;
  

