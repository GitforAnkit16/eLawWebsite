import "./Slider.css";
import React from 'react'

function Slider() {
    
  return (
    <div className='Slider'>
        <div className='header'><h2>Our Catogory</h2></div>
        <div className='card'>
                <img className = "product--image"src = "https://picsum.photos/200/100" alt = "Criminal Law"></img>
                <h2>Criminal Law</h2>
                <button>Know More</button>
            </div>
            <div className='card'>
                <img className = "product--image"src = "https://picsum.photos/200/100" alt = "CivilLaw"></img>
                <h2>Civil Law</h2>
                <button>Know More</button>
            </div>
            <div className='card'>
                <img className = "product--image"src = "https://picsum.photos/200/100" alt = "Family Law"></img>
                <h2>Family Law</h2>
                <button>Know More</button>
            </div>
    </div>
  )
}

export default Slider



