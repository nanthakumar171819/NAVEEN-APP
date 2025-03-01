import React from 'react';
import ben from './ben.png.png';

const Navbar = () => {
  return (
    <div><nav className="Homepage">
        <div className="logo"><img className='logo' src='{ben}'alt=''/></div>
        <ul className="nav_links">
            <li> <a href="/home">Home</a></li>
            <li> <a href="#">Contacts</a></li>
            <li> <a href="#">About</a></li>
        </ul>
        <div className="searchbar">
        <input type="text"placeholder="search items..."/>
        </div>
    </nav></div>
    
  );
};

export default Navbar;
