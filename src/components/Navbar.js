import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='nav-wrapper'>
            <nav className="navbar">
                <Link className="navbar-brand" to="/profile">
                <img className="navpicture1" src="/images/profile.jpg"  alt=" face"  />  
                </Link>
                <Link className="navbar-brand" to="/">
                <img className="navpicture2" src="https://image.flaticon.com/icons/svg/117/117479.svg"  alt=" face" />  
                </Link>
            </nav>
            <div className='nav-logo'><img src='/images/logo.png' /></div>
        </div>
    )
}

export default Navbar;


