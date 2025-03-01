import React from 'react'
import ben from "./ben.png.png";
import Products from './Products'


const Home = () => {
  return (
   
     
      <div>
      <nav className="navbar">
        <div className="logo"> 
           <img className='logo' src={ben} alt=''/>
        </div>
        <input type="text" placeholder="       Search products..." className="search-bar" />
        <ul className="nav-links">
           <h4>
            
           </h4>
          <li><a href="/home" className='k'>Home</a></li>
          <li><a href="#" className='a'>Contact</a></li>
          <li><a href="#" className='a'>About</a></li>
       </ul>
     </nav>
     <Products/></div>
     
  );
};

export default Home;