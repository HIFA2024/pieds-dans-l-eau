import React from "react";
import './update.css'



const Account = ()=>{
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
              style={{borderRadius : '10px',
                backgroundColor :"white",
                color : 'black',
                height : '30px',
                width : '400px'
              }}
              type="text" placeholder="Change your fullname" />
            </div>
            <div style={{
      position: 'absolute',
      marginTop: '29%',
      marginLeft: '12%'
      
    }}>
            <input
              type="file" id="uploadBtn"
              style={{
                display:'none'
                    }}
 
         />
           <label htmlFor="uploadBtn"
              style={{
               display:'inline-block',
               width :'230px',
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
                }}
           >CHANGE IMAGE</label>
            </div>
            <div style={{
      position: 'absolute',
      marginTop: '49%',
      marginLeft: '11%'
      
    }}>
               <button className="save"> <span>SAVE CHANGES</span></button>
            </div>
            <div style={{
      position: 'absolute',
      marginTop: '49%',
      marginLeft: '40%'
      
    }}>
                {/* <button>DELETE ACCOUNT</button> */}
                <button class="butto" >
                <svg viewBox="0 0 448 512" class="svgIcon"
                 >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Account