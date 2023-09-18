import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {Link, useNavigate } from "react-router-dom";
import newRequest from '../../utils/newRequest';
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
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser",null);
            navigate("/");
         }catch(err){
            console.log(err);
         }
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
                <Link to = "/services" className="link"><span>Services</span></Link>
                <Link to = "/documentation" className="link"><span>Documentation</span></Link>
                <Link to = "/ask" className="link"><span>Ask an Expert</span></Link>
                {!currentUser && <Link to="/login" className="link"><span>Sign in</span></Link>}
                {!currentUser &&  <Link to="/register" className="link"><span>Join</span></Link>}
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
                            <Link className='link' onClick={handleLogout}>Log Out </Link>

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