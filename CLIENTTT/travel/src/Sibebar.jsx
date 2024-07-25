import React from 'react'

function Sibebar({handleAddclick,handleAboutclick}) {

  return (
    <div>
    <div style={{
        position: 'fixed',
        // opacity : 0.6,
        zIndex: -1,
        backgroundColor: '#001524',
        marginLeft: '60px',
        marginTop: '63px',
        height: '90%',
        width: '3%',
        borderRadius: '42px',
        backdropFilter: 'blur(5px)'
    }
     }>
    <div>
      <img style={{
        opacity :1,
              position:'absolute',
              width:'28px',
              marginLeft: '10px',
              marginTop: '76px',
            }} src="https://th.bing.com/th?id=OIP.x2IjXd5TVZiVbSeiAD1UmAHaI3&w=228&h=273&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
    </div>
    <div onClick={handleAddclick}>
      <img style={{
        opacity :1,
              position:'absolute',
              width:'28px',
              marginLeft: '10px',
              marginTop: '250px',
              cursor :'pointer'
            }} src="https://www.bing.com/th?id=OIP.NWgKStyMQ_jBERxkK9QWxgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""
            
            />
    </div>
    <div onClick={handleAboutclick}>
      <img style={{
        opacity :1,
              position:'absolute',
              width:'44px',
              marginLeft: '0px',
              marginTop: '430px',
               cursor :'pointer'
            }} src="data:image/jpeg;base64,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" alt="" />
    </div>
    <div>
      <img style={{
        opacity :1,
              position:'absolute',
              width:'28px',
              marginLeft: '10px',
              marginTop: '600px',
            }} src="https://th.bing.com/th?id=OIP.KqV5FUrpoO-AZjY1buxR1wAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
    </div>
     </div>
     </div>
    )  
}

export default Sibebar