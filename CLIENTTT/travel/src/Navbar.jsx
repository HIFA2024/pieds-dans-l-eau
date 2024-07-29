import React, { useState } from "react";
import Sidebar from './Sibebar.jsx';

const Nav = ({changeview,setrefresh,homevisibilty,url,searchblog}) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const[search,setsearch]=useState('')
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
    const handlemyblogclick = ()=>{
        changeview('myblogs')
        setrefresh(true)
    }
    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('iduser')
        console.log(localStorage)
        changeview('log')
        homevisibilty(false)
        // setLoggedIn(false); // Update login state
      };

      const handlesearch = ()=>{
        searchblog(search)
      }
    return (
        <div style={{ marginTop: '0%', display: 'block', zIndex: 1 }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: 'black',
                // backgroundColor: '#001524',

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
                    }} src={url} alt="" />
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
                        width: '45px',
                        marginLeft: '-57px',
                        marginTop: '-6px'
                    }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUAAAD///8eHh5MTEzW1tY2Njbp6elUVFS/v7+EhIQYGBjJyckvLy85OTkhISHm5uZ1dXXx8fFfX1+mpqatra3d3d0oKCi1tbUMDAxoaGiLi4s+Pj5ZWVlHR0dtbW2RkZHE9o+BAAACF0lEQVR4nO3b21aCQBSA4UYFEZXAc5b1/m/ZaK1Q2WNyiNlj/3frXOx/cSgGfXoCAAAAAAAAAAAAAAAAAAAAAABdyBaLzPcMXcmWxiwfpCZdGWuV+p6jE6cWW+N7ji4k5lvie5L2floeoOasJfiai5awa9KpuTL9vqelL/vJl30+8DvknWbJdYs9NrPTR1GZuX71POZdIqHF1kTHz846R3Pfg95hLrbYmuPwgcVElevl57qJQovJnC22JgsrZjByt9j5B5uAYmY3W2zA6zaYmM0vLfZ+XJ6FymOiX1sujpLqmOG6TovumHGt46I75q1mi+aY2i2KY+q36I2pee2rjhk3aNEas3hu0GJGke+5Jc1azPrge3BBwxb7T/TG9+gV701bjNlq2+xs0WLMcud7/At5k/tY6cP3/OfyNsfFKia+C0pp3K7F1ui5bAZtW4zRsxNIDDE9IIaYHhBDTA+IIaYH/ymmOHmEmDjJj2/LNy/bmw9wIcQUSbmRNFvdeIYLICbeX6x7d+8U6I+J86uFC2eN+pjio7KFlLvONPUxSXXC3SrQmMpJduR6UaA9ZiruU27Ftepj5G+YTuS/nspjCuksc74sUB4Tv4lr5/JbT+0xY3Gt4+sbxPwJYojpATHE9IAYYnpADDE9yKTxCscjgPzcrOhnnONh1UH+0sXuIKwdykcRAAAAAAAAAAAAAAAAAAAAAIBufAL9kxsnO18Z4QAAAABJRU5ErkJggg==" alt="" />
                        Home</h3>
                </div>
                <div onClick={handleLogout}
                style={{
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
                    marginLeft: '1180px',

                }}>
                    <img onClick={handlesearch} style={{position:'absolute', marginLeft: '130px' , width:'22px', marginTop : '5px',cursor :'pointer'}} 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAY1BMVEX///8AAAD8/Pzx8fEEBAQeHh7u7u5cXFytra3c3NzX19e9vb3n5+f39/fr6+vMzMxLS0tVVVV/f381NTUrKyvGxsajo6NmZmZCQkIYGBh1dXWUlJSGhoYjIyO0tLSMjIwRERF7nXZ2AAADj0lEQVR4nO2a2ZKCMBBFIaCArLKICi7//5UT0kFxQTIPmn64p6asKc3DpblJL+A4AAAAAAAAAAAAAAAAAAAAAAAAAAuEl2WZJ2zLMGOQmeZh1x+DIGj7Lsw925JMiPqidu/URbmxLekDQ5C9uCKt/uTTPcWMwy2arfue7Zkuih9e779V7A9fl5ltea8I4USnqTMOq9PqOrGIW+W2Nb4iYvemuW4vuzjP8zi8tNU94mfbGh+Rdg1XY0yr3ea+77xNuL+FO7Qo8RXhnG/xjNOnH9NzrX0tVXPajblWfO2952NCuj0tD0Os5V9jSd87kv0gSYqKZyIZS/MMwa4SNkef6PUOnA9kpH1dMpEs46gz9mY2ivcDkYmthaNrjfjjMumQgT2TjB6S5n5h2WUMNQfSgo7n56PuhZps/QtNi5yv2hxLZs0ZJUa67cF6UXQaqJXHn6j6hHAScsfOYDGlzX1i/wChmz5kjUUidX3Xz6fMTwjV9gqM1h6Nb8qXUdnQ7YzWdnQ2WneHQ5Y2q/AbVTi19vMLVfmR0dpIFd1b652XoOy8NlqcnfTxYRlBTcliOlR4qkqprYt2/H9EmkQbHY/fhUo8Mx1UnxbWPa1PD7PRV37QGd8u4h8JQzg7tbY02wDfhIS0RmtLHhlROA3VHiYJI1Nlnm+9NpXNX2XckMSq/d2bJaKvkpaqYjouFxSi/IeTvgyZ+jDfihPCyVwelh7I9tS6LIZ6Sz2i/Rpv4ELTo6X9FdO8pvyJpkVSUnP6vMH0hvUZbEPnljN8t/iUy5MtI0cPeFpQkAwz0rest3Rhspbm4WnZkejBWDHXaCetHkDWy+ORn7HTmqr3s964dmmBryZ+LGRLT1DeGFLH5kVSdPtR0fAQLVWI46jpdGkeRDWX2n14VHdgMPfQyGw+alvte/2INm36YuU+4zez+/W3SBW7V3lzcHGIpCnGp1gTO6jtJz+u0y+vXHajZN3NxraMggdfM4q1k5TVG8X1UebKdfvkEEZEXbu6G0Oyajvqer1JrP2lJzS/Zr2Jy/EVim153qzJv+JWfuiLYeQQEiIk3vBx/07+nz06hFesZ3nyNef3hEaGWD+cIYH9ma8RyVT1ieF7K28Qjjd1iPUJiBFibAcUV0bF9UemJx+HsY0RYuIQHo/JTRgcoorvg9kTMTakeVfulkZSzNBieXQCAAAAAAAAAAAAAAAAAAAAAAAADPkDRW0dSJomZIoAAAAASUVORK5CYII=" alt="" />
                    <input style={{
                        borderRadius: '10px',
                        borderColor: 'black'
                    }} type="text" placeholder=" search..." onChange={(e)=>{setsearch(e.target.value)}} />
                    {/* <button>Search</button> */}
                </div>
            </div>
            {isSidebarVisible && <Sidebar onMouseEnter={handleSidebarMouseEnter} onMouseLeave={handleSidebarMouseLeave} handleAddclick={handleAddclick} handleAboutclick={handleAboutclick} handlemyblogclick={handlemyblogclick} />}
        </div>
    );
}

export default Nav;

