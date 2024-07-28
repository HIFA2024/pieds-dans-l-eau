import React from 'react'


function Sibebar({handleAddclick,handleAboutclick,handlemyblogclick}) {

  return (
    <div>
    <div 
         style={{
        position: 'fixed',
        // opacity : 0.6,
        zIndex: -1,
        backgroundColor: 'black',
        marginLeft: '60px',
        marginTop: '63px',
        height: '90%',
        width: '3%',
        borderRadius: '42px',
        backdropFilter: 'blur(5px)'
    }
     }>
    <div>
      <img  onClick={handlemyblogclick} style={{
        opacity :1,
              position:'absolute',
              width:'38px',
              marginLeft: '6px',
              marginTop: '76px',
              cursor:'pointer'
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf-sBqwg1BfD4DdzmBvn23KvwmmeavOpVwr597ShRST-JNrHKQ1dvd12kRdPNRdVqYBg&usqp=CAU" alt="" />
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
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUdwSWzxLy_MMH719DTPRtbpV_KJ6fYKgesWV6noUl1tyWg6zt-A18w5YkONRE1PjP9o&usqp=CAU" alt="" />
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