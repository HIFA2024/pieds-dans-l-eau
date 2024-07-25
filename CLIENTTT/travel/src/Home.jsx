import React, { useState } from "react";
import './filebutt.css'
// import axios from 'axios'
import Nav from "./Navbar.jsx";
import Allblogs from "./Allblogs.jsx";

function Home({changeview}) {
    const[hideblogs,sethideblogs]=useState(null)

    const hide = (x)=>{
        sethideblogs(x)
      }
  return (
    <div style={{position:'realitve'}}>
    <Nav changeview={changeview} hide={hide}/>
   {/* <div >
    <Allblogs />
   </div> */}
   </div>
  )
}
export default Home