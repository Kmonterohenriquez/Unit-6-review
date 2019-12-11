import React from 'react';
import {Link}  from 'react-router-dom'
const Header =()=>{
    return(
        <div className="Header">
            <Link to='/'>Dashboard</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default Header;