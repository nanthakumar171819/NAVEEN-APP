import React from 'react'
import hoodie1 from "./hoodie1.jpg.webp";
import hoodie2 from "./hoodie2.jpg.webp";
import hoodie3 from "./hoodie3.jpg.webp";

const Products = () => {
  return (
    <div>
<div id='cards'>
      <div className='card'>
        <img className='abi' src={hoodie1} alt='/'/>
      <h1>Black Color Hoodie</h1>
      <p>colors</p>
      <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>


      <div id="size-selector">
            <label for="size">Choose Size:</label>
            <select id="size" name="size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>

          <p>
            price: ₹ 1299 /-
          </p>
      </div></div>
      <div className='card1'>
        <img className='abi' src={hoodie2} alt='/'/>
      <h1>Blue Color Hoodie</h1>
      <p>colors</p>
      <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>


          <div id="size-selector">
            <label for="size">Choose Size:</label>
            <select id="size" name="size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
          <p>
            price: ₹ 999 /-
          </p>
          </div></div>
      <div className='card2'>
        <img className='abi' src={hoodie3} alt='/'/>
      <h1>Brown Hoodie</h1>
      <p>colors</p>
      <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>


          <div id="size-selector">
            <label for="size">Choose Size:</label>
            <select id="size" name="size">
            <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
        </div>
          <p>
            price: ₹ 1499 /-
          </p>
          
          </div>
      </div> 
     </div>
  );
};

export default Products;