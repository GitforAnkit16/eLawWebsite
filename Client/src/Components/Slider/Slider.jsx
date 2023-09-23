import "./Slider.css";
import React from 'react'

function Slider() {
    
  return (
    <div className='Slider'>
        <div className='header'><h2>Our Catogory</h2></div>
        <div className='card'>
                <div className="product--image img1"></div>
                <h2>Criminal Law</h2>
                <button>Know More</button>
            </div>
            <div className='card'>
                <div className="product--image img2"></div>
                <h2>Civil Law</h2>
                <button>Know More</button>
            </div>
            <div className='card'>
                <div className="product--image img3"></div>
                <h2>Family Law</h2>
                <button>Know More</button>
            </div>
    </div>
  )
}

export default Slider



