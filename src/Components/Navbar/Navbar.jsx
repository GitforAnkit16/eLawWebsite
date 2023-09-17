import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {Link } from "react-router-dom";
function Navbar() {
    const [active,setActive] = useState(false); 
    const [open,setOpen] = useState(false); 
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
   
    return () => {
        window.removeEventListener("scroll",isActive);
    }
    },[]);
    const currentUser = {
        id:1,
        username:'John Snow',
        isSeller :false
    }
     return ( 
    <div className={active? "navbar-active":"navbar"}>
        <div className="container">
            <div className="logo">
            <Link to = "/" className='link'>
                <span className='logo-txt'>JurisJunction</span>
            </Link>
            </div>
            <div className="links">
                <span>Services</span>
                <span>Documentation</span>
                {!currentUser?.isSeller && <span>Sign In</span>}
                {!currentUser && <button>Join</button> }
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src = "https://picsum.photos/200" alt = "profile" />
                        <span>{currentUser?.username} </span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                <>
                                    <Link className='link' to=  "/requests">Requests</Link>
                                </>
                           )}
                            <Link className='link' to=  "/order">Bookings</Link>
                            <Link className='link' to=  "/messages">Messages</Link>
                            <Link className='link' to=  "/">Log Out </Link>

                        </div>}
                    </div>
                )
                }
            </div>
        </div>

       
    </div>
  )
}

export default Navbar