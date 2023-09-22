
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Slider.css";
import React from 'react'

function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='Slider'>
        <div className='header'><h2>Our Catogory</h2></div>
        <Carousel responsive={responsive}>
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
            <div className='card'>
                <img className = "product--image"src = "https://picsum.photos/200/100" alt = "Property Law"></img>
                <h2>Property Law</h2>
                <button>Know More</button>
            </div>
        </Carousel>;
    </div>
  )
}

export default Slider