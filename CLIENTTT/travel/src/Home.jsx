import React, { useState } from "react";
import './filebutt.css'
// import axios from 'axios'
import Nav from "./Navbar.jsx";

function Home({changeview,setrefresh,homevisibilty,url,searchblog}) {
    const[hideblogs,sethideblogs]=useState(null)

    const hide = (x)=>{
        sethideblogs(x)
      }
  return (
    <div style={{position:'realitve'}}>
    <Nav searchblog={searchblog} changeview={changeview} hide={hide} setrefresh={setrefresh} homevisibilty={homevisibilty} url={url} />
   {/* <div >
    <Allblogs />
   </div> */}
   </div>
  )
}
export default Home