import React, { useState } from "react";
import Sidebar from './Sibebar.jsx';

const Nav = ({changeview}) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    let timeoutId;

    const handleMouseEnter = () => {
        // Clear previous timeout to prevent multiple executions
        clearTimeout(timeoutId);
        setIsSidebarVisible(true);
    };

    const handleMouseLeave = () => {
        // Set timeout to hide sidebar after 3 seconds
        timeoutId = setTimeout(() => {
            setIsSidebarVisible(false);
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    const handleSidebarMouseEnter = () => {
        // Clear timeout when mouse enters sidebar to prevent hiding
        clearTimeout(timeoutId);
    };

    const handleSidebarMouseLeave = () => {
        // Reset timeout when mouse leaves sidebar to continue countdown
        timeoutId = setTimeout(() => {
            setIsSidebarVisible(false);
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    const handleaccountclick = ()=>{
        changeview('account')

    }
    const handleHomeclick = ()=>{
        changeview('allblogs')

    }
    const handleAddclick = ()=>{
        changeview('addblog')

    }
    const handleAboutclick = ()=>{
        changeview('about')

    }
    
    return (
        <div style={{ marginTop: '0%', display: 'block', zIndex: 1 }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: '#001524',
                position: 'fixed',
                width: '94%',
                height: '60px',
                borderRadius: '34px',
                marginLeft: '41px',
                color: 'white',
                fontFamily: 'cursive'
            }}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img style={{
                        width: '35px',
                        marginLeft: '-665px',
                        marginTop: '13px',
                        cursor: 'pointer'
                    }} src="https://th.bing.com/th?q=White+Menu+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=TN&setlang=fr&adlt=strict&t=1&mw=247" alt="" />
                </div>
                <div style={{
                    position: 'absolute',
                    marginRight: '730px',
                    marginTop: '-2px',
                    cursor: 'pointer'
                }}
                onClick={handleaccountclick}>
                    <h3><img style={{
                        position: 'absolute',
                        width: '17px',
                        marginLeft: '-32px',
                        marginTop: '7px',
                    }} src="https://th.bing.com/th/id/OIP.bLEGeXu4472GZUEAczRVMQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                        Account</h3>
                </div>
                <div style={{
                    position: 'absolute',
                    marginTop: '-1px',
                    marginLeft: '-91px',
                    cursor: 'pointer'
                }} onClick={handleHomeclick}>
                    <h3><img style={{
                        position: 'absolute',
                        width: '15px',
                        marginLeft: '-27px',
                        marginTop: '7px'
                    }} src="https://th.bing.com/th?id=OIP.4nNpkryXQyfEDTBbX_FFoAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                        Home</h3>
                </div>
                <div style={{
                    position: 'absolute',
                    marginTop: '-2px',
                    marginLeft: '557px',
                    cursor: 'pointer'
                }}>
                    <h3><img style={{
                        position: 'absolute',
                        width: '15px',
                        marginLeft: '-26px',
                        marginTop: '7px'
                    }} src="https://th.bing.com/th?id=OIP.KqV5FUrpoO-AZjY1buxR1wAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                        Log Out</h3>
                </div>
                <div style={{
                    position: 'absolute',
                    marginTop: '17px',
                    marginLeft: '1200px',

                }}>
                    <input style={{
                        borderRadius: '10px',
                        borderColor: 'black'
                    }} type="text" placeholder=" search..." />
                    {/* <button>Search</button> */}
                </div>
            </div>
            {isSidebarVisible && <Sidebar onMouseEnter={handleSidebarMouseEnter} onMouseLeave={handleSidebarMouseLeave} handleAddclick={handleAddclick} handleAboutclick={handleAboutclick} />}
        </div>
    );
}

export default Nav;


// import React from "react";
// import Sidebar from './Sibebar.jsx'

// // 2635 color code
// const Nav = ()=>{
//     return ( 
//         <div style={{
//             marginTop : '0%', display: 'block', zIndex:1
//         }} >
//         <div style={{
//           display : 'flex',
//           justifyContent :'space-around',
//           backgroundColor: 'black',  
//           position : 'fixed',
//           width: '94%',
//           height : '60px',
//           borderRadius: '34px',
//           marginLeft : '31px',
//           color:'white',
//           fontFamily:'cursive'
//         }}>
//             <div>
//                 <img style={{
//                     width:'35px',
//                     marginLeft: '-665px',
//                     marginTop: '13px',
//                 }} src="https://th.bing.com/th?q=White+Menu+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-XA&cc=TN&setlang=fr&adlt=strict&t=1&mw=247" alt="" 
//                 />
//             </div>
//          <div style={{
//           position: 'absolute',
//           marginRight: '730px',
//           marginTop: '-2px',
//           cursor :'pointer'
//          }}>
//           <h3><img style={{
//             position:'absolute',
//             width:'17px',
//             marginLeft: '-32px',
//             marginTop: '7px',
//           }} src="https://th.bing.com/th/id/OIP.bLEGeXu4472GZUEAczRVMQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
//           Account</h3>
//          </div>
//          <div style={{
//            position: 'absolute',
//            marginTop : '-1px',
//            marginLeft : '-91px',
//            cursor :'pointer'
//          }}>
//           <h3><img style={{
//              position:'absolute',
//              width:'15px',
//              marginLeft: '-27px',
//              marginTop: '7px'
//           }} src="https://th.bing.com/th?id=OIP.4nNpkryXQyfEDTBbX_FFoAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
//           Accessibilty</h3>
//          </div>
//          <div style={{
//            position: 'absolute',
//            marginTop :'-2px',
//            marginLeft : '557px',
//            cursor :'pointer'
//          }}>
//           <h3><img style={{
//              position:'absolute',
//              width:'15px',
//              marginLeft: '-26px',
//              marginTop: '7px'
//           }}src="https://th.bing.com/th?id=OIP.KqV5FUrpoO-AZjY1buxR1wAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
//           Log Out</h3>
//          </div>
//          <div style={{
//           position:'absolute',
//           marginTop : '17px',
//           marginLeft:'1200px',
          
//          }}>
//           <input style={{
//             borderRadius:'10px',
//             borderColor:'black'}} type="text"  placeholder=" search..."/>
//           {/* <button>Search</button> */}
//          </div>
//         </div>
//         <Sidebar  />
//         </div>
//       )
// }

// export default Nav