import React from "react";
import './add.css'



const Addblog =()=>{

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
              }}/>
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
                />
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
                  }}/>
            </div>
            <div style={{
                    position: 'absolute',
                    marginTop: '38%',
                    marginLeft: '14%'
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
                    marginTop: '57%',
                    marginLeft: '19%'
    }}> 
            <button className="add"> <span>ADD EXPERIENCE</span></button>
            </div>
        </div>
    )
}

export default  Addblog